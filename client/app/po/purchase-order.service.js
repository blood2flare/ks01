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
var PurchaseOrderService = (function () {
    function PurchaseOrderService() {
    }
    PurchaseOrderService.prototype.getPO = function () {
        return ([
            {
                docno: 1,
                doctype: 'po',
                date: null,
                vendor: 'vendor',
                porg: 'porg',
                htext: 'PO 1',
                delivery: 'main store',
                terms: 'credit',
                termstext1: '',
                termstext2: '',
                termstext3: '',
                createdby: '',
                createstamp: null
            }, {
                docno: 2,
                doctype: 'po',
                date: null,
                vendor: 'vendor',
                porg: 'porg',
                htext: 'PO 2',
                delivery: 'main store',
                terms: 'credit',
                termstext1: '',
                termstext2: '',
                termstext3: '',
                createdby: '',
                createstamp: null
            }
        ]);
    };
    PurchaseOrderService.prototype.getPObyID = function (poID) {
        return ({
            docno: 1,
            doctype: 'po',
            date: null,
            vendor: 'vendor',
            porg: 'porg',
            htext: 'PO 1',
            delivery: 'main store',
            terms: 'credit',
            termstext1: '',
            termstext2: '',
            termstext3: '',
            createdby: '',
            createstamp: null
        });
    };
    PurchaseOrderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PurchaseOrderService);
    return PurchaseOrderService;
}());
exports.PurchaseOrderService = PurchaseOrderService;
//# sourceMappingURL=purchase-order.service.js.map