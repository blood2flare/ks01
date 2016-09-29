import { Component, Input, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs/subscription';

import { Wbs } from './wbs';
import { ActiveWbsService } from './active-wbs.service';

@Component({
    selector: 'c-wbs-detail',
    templateUrl: '/app/wbs/wbs-detail.component.html',
    providers: [
        
    ]
})
export class WbsDetailComponent {
    @Input() wbs : Wbs;
    cTitle: string = 'WBS Detail';
    mode: number = 0;
    // subscription: Subscription;
    
    constructor (
        private _activeWbsService: ActiveWbsService
    ) {
        // this.subscription = 
        _activeWbsService.activeWbs$.subscribe(
            sel_wbs => {
                this.wbs = sel_wbs;
                this.mode = _activeWbsService.mode;
                this.cTitle = _activeWbsService.modeStr[_activeWbsService.mode] + ' WBS' + (this.wbs.code ? ' ' + this.wbs.code : ''); 
            },
            err => console.log(err)
        );
    }

    saveWbs() {
        if (this.mode == 1) { // Create
            this._activeWbsService.createWbs(this.wbs);
        } else if (this.mode == 2) {

        }
    }

    ngOnInit() {
        this.wbs = new Wbs;
    }

    // ngOnDestroy() {
    //     this.subscription.unsubscribe();
    // }

}