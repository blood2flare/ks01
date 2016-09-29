import { Component, Input, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs/subscription';

import { ActiveMatService } from './active-mat.service';
import { Material } from '../material/material';

@Component({
    selector: 'c-mat-detail',
    templateUrl: '/app/wbs/comp-detail.component.html',
    providers: [
        
    ]
})
export class CompDetailComponent {
    @Input() mat : Material;
    cTitle: string = 'Component Detail';
    mode: number = 0;
    // subscription: Subscription;
    
    constructor (
        private _activeMatService: ActiveMatService
    ) {
        // this.subscription = 
        _activeMatService.activeMat$.subscribe(
            sel_mat => {
                this.mat = sel_mat;
                this.mat.qty = this.mat.wbsqty * this.mat.coef;
                this.mode = _activeMatService.mode;
                this.cTitle = _activeMatService.modeStr[_activeMatService.mode] + ' Material' + (this.mat.code ? ' ' + this.mat.code : ''); 
            },
            err => console.log(err)
        );
    }

    saveMat() {
        if (this.mode == 1) {
            this._activeMatService.createComp(this.mat);
        } else if (this.mode == 2) {

        }
    }

    ngOnInit() {
        // this.mat = new Material;
    }

    // ngOnDestroy() {
    //     this.subscription.unsubscribe();
    // }

}