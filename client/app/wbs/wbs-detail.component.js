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
var wbs_1 = require('./wbs');
var active_wbs_service_1 = require('./active-wbs.service');
var WbsDetailComponent = (function () {
    // subscription: Subscription;
    function WbsDetailComponent(_activeWbsService) {
        var _this = this;
        this._activeWbsService = _activeWbsService;
        this.cTitle = 'WBS Detail';
        this.mode = 0;
        // this.subscription = 
        _activeWbsService.activeWbs$.subscribe(function (sel_wbs) {
            _this.wbs = sel_wbs;
            _this.mode = _activeWbsService.mode;
            _this.cTitle = _activeWbsService.modeStr[_activeWbsService.mode] + ' WBS' + (_this.wbs.code ? ' ' + _this.wbs.code : '');
        }, function (err) { return console.log(err); });
    }
    WbsDetailComponent.prototype.saveWbs = function () {
        if (this.mode == 1) {
            this._activeWbsService.createWbs(this.wbs);
        }
        else if (this.mode == 2) {
        }
    };
    WbsDetailComponent.prototype.ngOnInit = function () {
        this.wbs = new wbs_1.Wbs;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', wbs_1.Wbs)
    ], WbsDetailComponent.prototype, "wbs", void 0);
    WbsDetailComponent = __decorate([
        core_1.Component({
            selector: 'c-wbs-detail',
            templateUrl: '/app/wbs/wbs-detail.component.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [active_wbs_service_1.ActiveWbsService])
    ], WbsDetailComponent);
    return WbsDetailComponent;
}());
exports.WbsDetailComponent = WbsDetailComponent;
//# sourceMappingURL=wbs-detail.component.js.map