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
// import { Subscription } from 'rxjs/subscription';
var active_mat_service_1 = require('./active-mat.service');
var material_1 = require('../material/material');
var CompDetailComponent = (function () {
    // subscription: Subscription;
    function CompDetailComponent(_activeMatService) {
        var _this = this;
        this._activeMatService = _activeMatService;
        this.cTitle = 'Component Detail';
        this.mode = 0;
        // this.subscription = 
        _activeMatService.activeMat$.subscribe(function (sel_mat) {
            _this.mat = sel_mat;
            _this.mat.qty = _this.mat.wbsqty * _this.mat.coef;
            _this.mode = _activeMatService.mode;
            _this.cTitle = _activeMatService.modeStr[_activeMatService.mode] + ' Material' + (_this.mat.code ? ' ' + _this.mat.code : '');
        }, function (err) { return console.log(err); });
    }
    CompDetailComponent.prototype.saveMat = function () {
        if (this.mode == 1) {
            this._activeMatService.createComp(this.mat);
        }
        else if (this.mode == 2) {
        }
    };
    CompDetailComponent.prototype.ngOnInit = function () {
        // this.mat = new Material;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', material_1.Material)
    ], CompDetailComponent.prototype, "mat", void 0);
    CompDetailComponent = __decorate([
        core_1.Component({
            selector: 'c-mat-detail',
            templateUrl: '/app/wbs/comp-detail.component.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [active_mat_service_1.ActiveMatService])
    ], CompDetailComponent);
    return CompDetailComponent;
}());
exports.CompDetailComponent = CompDetailComponent;
//# sourceMappingURL=comp-detail.component.js.map