import { Component, Input } from '@angular/core';

import { ActiveWbsService } from './active-wbs.service';
import { ActiveMatService } from './active-mat.service';
import { Wbs } from './wbs';
// import { Material } from '../material/material';

@Component ({
    selector: 'c-wbs-tree-element',
    templateUrl: '/app/wbs/wbs-tree-element.component.html',
    providers: [

    ]
})
export class WbsTreeElementComponent {
    @Input() we: Wbs[];
    // mat: Material;
    actWbs: number;

    constructor(
        private _activeWbsService: ActiveWbsService,
        private _activeMatService: ActiveMatService
    ) { }

    detailWbs(wbs: Wbs) {
        this._activeWbsService.mode = 3;
        this._activeWbsService.setActiveWbs(wbs);
        this._activeMatService.mode = 0;
        // this._activeMatService.resetMat();
        this.actWbs = wbs.id;
    }

    createWbsBefore(wbs_id) {

    }
    
    createWbsChild(wbs_id) {
        this._activeWbsService.mode = 1;
        this._activeWbsService.setActiveWbs(new Wbs);
    }

    createComponentChild(wbs_id) {
        
    }

    ngOnInit() {
        // this.sel_wbs = new Wbs;
    }

}