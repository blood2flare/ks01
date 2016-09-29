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
var material_1 = require('../material/material');
var CompTreeElementComponent = (function () {
    function CompTreeElementComponent(_activeWbsService, _activeMatService) {
        this._activeWbsService = _activeWbsService;
        this._activeMatService = _activeMatService;
    }
    CompTreeElementComponent.prototype.detailMat = function (material) {
        this._activeMatService.mode = 3;
        this._activeMatService.setActiveMat(material);
        this._activeWbsService.mode = 0;
        // this._activeWbsService.resetWbs();
    };
    CompTreeElementComponent.prototype.createCompAfter = function (mat) {
        this._activeMatService.mode = 1;
        this._activeMatService.setActiveMat(new material_1.Material);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CompTreeElementComponent.prototype, "me", void 0);
    CompTreeElementComponent = __decorate([
        core_1.Component({
            selector: 'c-comp-tree-element',
            templateUrl: '/app/wbs/comp-tree-element.component.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [active_wbs_service_1.ActiveWbsService, active_mat_service_1.ActiveMatService])
    ], CompTreeElementComponent);
    return CompTreeElementComponent;
}());
exports.CompTreeElementComponent = CompTreeElementComponent;
//# sourceMappingURL=comp-tree-element.component.js.map