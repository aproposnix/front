import { Injectable                                 } from '@angular/core';
import { HttpClient                                 } from '@angular/common/http';
import { URL_BMS_API } from '../../../environments/environment';

//Services
import { Observable, concat, of, merge } from 'rxjs';
import { AsyncacheService } from '../storage/asyncache.service';
import { map } from 'rxjs/operators';
import { NetworkService } from './network.service';
import { MatSnackBar } from '@angular/material';
import { storedRequestInterface } from 'src/app/model/stored-request';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

    constructor(
        private http : HttpClient,
        private cacheService: AsyncacheService,
        private networkService: NetworkService,
        private snackbar: MatSnackBar,
    ){
    }

    resolveItemKey(url :string) {

        if (url.includes(URL_BMS_API, 0)) {
            url = url.split(URL_BMS_API)[1];

            switch(url) {
                case '/login' : return(AsyncacheService.USER)
                case '/projects' : return(AsyncacheService.PROJECTS)
                case '/distributions' : return(AsyncacheService.DISTRIBUTIONS)
                case '/location/upcoming_distribution' : return(AsyncacheService.UPCOMING)
                case '/country_specifics' : return(AsyncacheService.SPECIFICS)
                case '/users' : return(AsyncacheService.USERS)
                case '/sectors' : return(AsyncacheService.SECTORS)
                case '/donors' : return(AsyncacheService.DONORS)
                case '/location/adm1' : return(AsyncacheService.ADM1)
                case '/location/adm2' : return(AsyncacheService.ADM2)
                case '/location/adm3' : return(AsyncacheService.ADM3)
                case '/location/adm4' : return(AsyncacheService.ADM4)
                case '/distributions/criteria' : return(AsyncacheService.CRITERIAS)
                case '/modalities' : return(AsyncacheService.MODALITIES)
                case '/vulnerability_criteria' : return(AsyncacheService.VULNERABILITIES)
                case '/summary' : return(AsyncacheService.SUMMARY)
                case '/households' : return(AsyncacheService.HOUSEHOLDS)
                default:
                    if(url.substring(0,24) === '/distributions/projects/')
                        return(AsyncacheService.DISTRIBUTIONS + '_' + url.split('/distributions/projects/')[1]);
                    else
                        return(null);
            }
        } else {
            return(null);
        }
        
    }

    get(url, options = {}) : Observable<any> {
        //console.log('-(', url,')-');

        let itemKey = this.resolveItemKey(url);
        let connected = this.networkService.getStatus();
        let cacheData : any;
        // Test logs
        //console.log('--', itemKey, '--');

        // If this item is cachable & user is connected
        if(itemKey && connected) {
            return concat(
                this.cacheService.get(itemKey).pipe(
                    map(
                        result => {
                            cacheData = result;
                            return(result);
                        }
                    )
                ), 
                this.http.get(url, options).pipe( 
                    map(
                        result => {
                            if(result !== undefined) {
                                if(Array.isArray(result) && Array.isArray(cacheData)) {
                                    if(JSON.stringify(result) !== JSON.stringify(cacheData))
                                        this.cacheService.set(itemKey, result);
                                } else if(result !== cacheData) {
                                    this.cacheService.set(itemKey, result);
                                }
                            }
                            return(result);
                        }
                    )
                )
            );
        }
        // If user is connected but cache doesn't manage this item
        else if (connected) {
            return this.http.get(url, options);
        } 
        // If user offline but this item can be accessed from the cache
        else if (itemKey) {
            return this.cacheService.get(itemKey);
        }
        // If disconnected and item uncachable
        else {
            this.snackbar.open( 'This data can\'t be accessed offline', '', {duration:3000, horizontalPosition: 'center'});
            return of([]);
        }
    }

    put(url, body, options = {}) : Observable<any> {
        const AS = AsyncacheService;
        let itemKey = this.resolveItemKey(url);
        let connected = this.networkService.getStatus();

        if(!connected) {
            // If the Offline user is trying to create Distribution/Project/Household
            if(itemKey) {
                let date = new Date();
                let request : storedRequestInterface = {url, body, options , date};
                this.cacheService.storeRequest('PUT', request);
                this.snackbar.open('No network - This data creation will be sent to DB on next connection', '', {duration:3000, horizontalPosition: 'center'});
            }
            // Otherwise
            else {
                this.snackbar.open('No network connection to create data', '', {duration:3000, horizontalPosition: 'center'});
            }

            return(of(null));
        }
        else {
            return this.http.put(url, body, options);
        }
    }

    post(url, body, options = {}) : Observable<any> {
        const AS = AsyncacheService;
        let itemKey = this.resolveItemKey(url);
        let connected = this.networkService.getStatus();

        if(!connected) {
            // If the Offline user is trying to create Distribution/Project/Household
            if(itemKey) {
                let date = new Date();
                let request : storedRequestInterface = {url, body, options, date};
                this.cacheService.storeRequest('POST', request);
                this.snackbar.open('No network - This data creation will be sent to DB on next connection', '', {duration:3000, horizontalPosition: 'center'});
            }
            // Otherwise
            else {
                this.snackbar.open('No network connection to create data', '', {duration:3000, horizontalPosition: 'center'});
            }

            return(of(null));
        }
        else {
            return this.http.post(url, body, options);
        }
    }

    delete(url, options = {}) : Observable<any> {
        const AS = AsyncacheService;
        let itemKey = this.resolveItemKey(url);
        let connected = this.networkService.getStatus();

        if(!connected) {
            // If the Offline user is trying to create Distribution/Project/Household
            if(itemKey) {
                let date = new Date();
                let request : storedRequestInterface = {url, options, date};
                this.cacheService.storeRequest('DELETE', request);
                this.snackbar.open('No network - This data creation will be sent to DB on next connection', '', {duration:3000, horizontalPosition: 'center'});
            }
            // Otherwise
            else {
                this.snackbar.open('No network connection to create data', '', {duration:3000, horizontalPosition: 'center'});
            }

            return(of(null));
        }
        else {
            return this.http.delete(url, options);
        }
    }

}
