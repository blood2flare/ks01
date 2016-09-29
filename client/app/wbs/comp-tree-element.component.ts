import { Component, Input } from '@angular/core';

import { ActiveWbsService } from './active-wbs.service';
import { ActiveMatService } from './active-mat.service';
import { Material } from '../material/material';

@Component ({
    selector: 'c-comp-tree-element',
    templateUrl: '/app/wbs/comp-tree-element.component.html',
    providers: [

    ]
})
export class CompTreeElementComponent {
    @Input() me: Material[];

    constructor(
        private _activeWbsService: ActiveWbsService,
        private _activeMatService: ActiveMatService
    ) { }

    detailMat(material: Material) {
        this._activeMatService.mode = 3;
        this._activeMatService.setActiveMat(material);
        this._activeWbsService.mode = 0;
        // this._activeWbsService.resetWbs();
    }

    createCompAfter(mat) {   
        this._activeMatService.mode = 1;
        this._activeMatService.setActiveMat(new Material);
    }
    
}