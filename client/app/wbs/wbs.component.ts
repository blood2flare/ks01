import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { WbsService } from './wbs.service';
import { ActiveWbsService } from './active-wbs.service';
import { ActiveMatService } from './active-mat.service';
import { Project } from '../project/project';
import { Wbs } from './wbs';

// import { TreeComponent } from 'angular2-tree-component';

@Component( {
    selector: 'c-wbs',
    templateUrl: '/app/wbs/wbs.component.html',
    // directives: [
    //     TreeComponent
    // ],
    providers: [
        WbsService
    ]
})
export class WbsComponent {
    private _wbss: Wbs[];
    private _cTitle: string = 'Work Breakdown Structure';
    private _wbsHidden: boolean;
    private _matHidden: boolean;
    
    @Input() project: Project;
    @Input() sel_wbsa: Wbs;

    constructor(
        private _wbsService: WbsService,
        private _activeWbsService: ActiveWbsService,
        private _activeMatService: ActiveMatService,
        private _route: ActivatedRoute
    ) { }

    // wbsHidden() {
    //     if(this._activeWbsService.mode == 0) return true;
    //     else return false;
    // }
    // matHidden() {
    //     if(this._activeMatService.mode == 0) return true;
    //     else return false;
    // }

    ngOnInit() {
        //this.wbss = this._wbsService.getWbs(this.project.id);
        this._route.params.forEach((params: Params) => {
            let id = +params['id'];
            this._wbss = this._wbsService.getWbs(id);
        })
        this._activeWbsService.activeWbs$.subscribe(
            sel_wbs => {
                this._wbsHidden = false;
                this._matHidden = true
            }
        );
        this._activeMatService.activeMat$.subscribe(
            sel_mat => {
                this._matHidden = false;
                this._wbsHidden = true
            }
        );
    }

}