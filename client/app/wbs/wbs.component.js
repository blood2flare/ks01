"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var wbs_service_1 = require('./wbs.service');
var active_wbs_service_1 = require('./active-wbs.service');
var active_mat_service_1 = require('./active-mat.service');
var project_1 = require('../project/project');
var wbs_1 = require('./wbs');
// import { TreeComponent } from 'angular2-tree-component';
var WbsComponent = (function () {
    function WbsComponent(_wbsService, _activeWbsService, _activeMatService, _route) {
        this._wbsService = _wbsService;
        this._activeWbsService = _activeWbsService;
        this._activeMatService = _activeMatService;
        this._route = _route;
        this._cTitle = 'Work Breakdown Structure';
    }
    // wbsHidden() {
    //     if(this._activeWbsService.mode == 0) return true;
    //     else return false;
    // }
    // matHidden() {
    //     if(this._activeMatService.mode == 0) return true;
    //     else return false;
    // }
    WbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.wbss = this._wbsService.getWbs(this.project.id);
        this._route.params.forEach(function (params) {
            var id = +params['id'];
            _this._wbss = _this._wbsService.getWbs(id);
        });
        this._activeWbsService.activeWbs$.subscribe(function (sel_wbs) {
            _this._wbsHidden = false;
            _this._matHidden = true;
        });
        this._activeMatService.activeMat$.subscribe(function (sel_mat) {
            _this._matHidden = false;
            _this._wbsHidden = true;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', project_1.Project)
    ], WbsComponent.prototype, "project", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', wbs_1.Wbs)
    ], WbsComponent.prototype, "sel_wbsa", void 0);
    WbsComponent = __decorate([
        core_1.Component({
            selector: 'c-wbs',
            templateUrl: '/app/wbs/wbs.component.html',
            // directives: [
            //     TreeComponent
            // ],
            providers: [
                wbs_service_1.WbsService
            ]
        }), 
        __metadata('design:paramtypes', [wbs_service_1.WbsService, active_wbs_service_1.ActiveWbsService, active_mat_service_1.ActiveMatService, router_1.ActivatedRoute])
    ], WbsComponent);
    return WbsComponent;
}());
exports.WbsComponent = WbsComponent;
//# sourceMappingURL=wbs.component.js.map