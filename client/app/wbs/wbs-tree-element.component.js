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
var active_wbs_service_1 = require('./active-wbs.service');
var active_mat_service_1 = require('./active-mat.service');
var wbs_1 = require('./wbs');
// import { Material } from '../material/material';
var WbsTreeElementComponent = (function () {
    function WbsTreeElementComponent(_activeWbsService, _activeMatService) {
        this._activeWbsService = _activeWbsService;
        this._activeMatService = _activeMatService;
    }
    WbsTreeElementComponent.prototype.detailWbs = function (wbs) {
        this._activeWbsService.mode = 3;
        this._activeWbsService.setActiveWbs(wbs);
        this._activeMatService.mode = 0;
        // this._activeMatService.resetMat();
        this.actWbs = wbs.id;
    };
    WbsTreeElementComponent.prototype.createWbsBefore = function (wbs_id) {
    };
    WbsTreeElementComponent.prototype.createWbsChild = function (wbs_id) {
        this._activeWbsService.mode = 1;
        this._activeWbsService.setActiveWbs(new wbs_1.Wbs);
    };
    WbsTreeElementComponent.prototype.createComponentChild = function (wbs_id) {
    };
    WbsTreeElementComponent.prototype.ngOnInit = function () {
        // this.sel_wbs = new Wbs;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], WbsTreeElementComponent.prototype, "we", void 0);
    WbsTreeElementComponent = __decorate([
        core_1.Component({
            selector: 'c-wbs-tree-element',
            templateUrl: '/app/wbs/wbs-tree-element.component.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [active_wbs_service_1.ActiveWbsService, active_mat_service_1.ActiveMatService])
    ], WbsTreeElementComponent);
    return WbsTreeElementComponent;
}());
exports.WbsTreeElementComponent = WbsTreeElementComponent;
//# sourceMappingURL=wbs-tree-element.component.js.map