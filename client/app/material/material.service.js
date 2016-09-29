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
var MaterialService = (function () {
    function MaterialService() {
    }
    MaterialService.prototype.getMaterial = function () {
        return ([
            {
                id: 1,
                code: '001',
                descr: 'Tiang',
                price: 100000,
                per: 1,
                uom: 'Buah',
                coef: 1,
                qty: 0,
                wbsqty: 0
            },
            {
                id: 2,
                code: '002',
                descr: 'Pasir',
                price: 1000,
                per: 1,
                uom: 'KG',
                coef: 1,
                qty: 0,
                wbsqty: 0
            },
        ]);
    };
    MaterialService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MaterialService);
    return MaterialService;
}());
exports.MaterialService = MaterialService;
//# sourceMappingURL=material.service.js.map