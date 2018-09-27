import { Injectable } from '@angular/core';
import {
	HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpEventType
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { URL_BMS_API } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material';

const api = URL_BMS_API;

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        public snackbar : MatSnackBar
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        let reqMethod : String = req.method;

        return next.handle(req).pipe(
            catchError(
                (error: any, caught: Observable<HttpEvent<any>>) => {
                    this.snackErrors(error);
                    return of(error);
                }
            )
        );
    }

    snackErrors(response : any) {
        if (response.message) {
            this.snackbar.open(response.message, '', {duration: 3000, horizontalPosition: 'center'});
        } else {
            this.snackbar.open('An error occured, request has failed (Empty back response).', '', {duration: 3000, horizontalPosition: 'center'});
        }
    }

}