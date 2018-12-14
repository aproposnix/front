import { Component, OnInit } from '@angular/core';
import { AsyncacheService } from 'src/app/core/storage/asyncache.service';
import { NetworkService } from 'src/app/core/api/network.service';
import { ModalRequestsComponent } from 'src/app/components/modals/modal-requests/modal-requests.component';
import { MatDialog } from '@angular/material';
import { StoredRequests } from 'src/app/model/stored-request';

@Component({
    selector: 'app-request-display',
    templateUrl: './request-display.component.html',
    styleUrls: ['./request-display.component.scss']
})
export class RequestDisplayComponent implements OnInit {

    public networkOn = true;
    public storedRequests : StoredRequests;

    constructor(
        private cacheService: AsyncacheService,
        private networkService: NetworkService,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
        this.storedRequests = new StoredRequests();
        this.loadStoredRequests();

        this.networkService.getOnlineObs().subscribe(
            status => {
                if(status !== this.networkOn) {
                    this.networkOn = status;
                    if(status === true) {
                        this.loadStoredRequests();
                    }
                }
            }
        )
    }

    openDialog() {
        this.dialog.open(ModalRequestsComponent, {data : {requests: this.storedRequests} });
    }

    loadStoredRequests() {
        this.cacheService.get(AsyncacheService.PENDING_REQUESTS).subscribe(
            (result) => {
                this.storedRequests = new StoredRequests(result);
                console.log('Cached: ', result);
            }
        )
    }

    requestsArePending() : boolean {
        return (this.networkOn && this.storedRequests.containsRequest());   
    }
}
