import { Injectable } from '@angular/core';
import { Observable, merge, of, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { componentRefresh } from '@angular/core/src/render3/instructions';
import { MatSnackBar, MatIcon } from '@angular/material';
import { IconSvgComponent } from 'src/app/components/icon-svg/icon-svg.component';

@Injectable({
    providedIn: 'root'
})
export class NetworkService {

    private CONNECTED: boolean = true;
    private online$: Observable<boolean>;

    constructor(
        private snackbar: MatSnackBar
    ) {
        this.online$ = merge(
            of(navigator.onLine),
            fromEvent(window, 'online').pipe(mapTo(true)),
            fromEvent(window, 'offline').pipe(mapTo(false))
        )

        this.refreshNetworkStatus();
    }

    refreshNetworkStatus() {
        this.online$.subscribe(
            status => {
                if (this.CONNECTED !== status) {
                    let newStatusNotification = status ? 'connected to the network' : 'disconnected from the network';
                    this.snackbar.open('You are now ' + newStatusNotification, '', {duration: 5000, horizontalPosition: 'center'});
                    this.CONNECTED = status;
                }
            }
        )
    }

    public getStatus(): boolean {
        return (this.CONNECTED);
    }
}