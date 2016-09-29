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
var WbsService = (function () {
    function WbsService() {
    }
    WbsService.prototype.getWbs = function (proj_id) {
        if (proj_id === 1) {
            this._wbs = [
                {
                    id: 1,
                    code: 'A',
                    desc: 'PEKERJAAN PAGAR',
                    start: 0,
                    qty: 0,
                    uom: '',
                    material: [],
                    index: 1,
                    sub: [{
                            id: 101,
                            code: 'L001',
                            desc: 'Pagar Bagian Samping dan Belakang',
                            start: 0,
                            qty: 127.5,
                            uom: 'm\'',
                            material: [],
                            index: 1,
                            sub: [{
                                    id: 10101,
                                    code: 'L001.01',
                                    desc: 'Galian Pondasi Pagar Samping & Belakang',
                                    start: 0,
                                    qty: 63.11,
                                    uom: 'm3',
                                    material: [
                                        {
                                            id: 1,
                                            code: 'CBA015',
                                            descr: 'GALIAN TANAH PONDASI MANUAL + LANGSIR DEKAT',
                                            price: 75000,
                                            per: 1,
                                            uom: 'm3',
                                            coef: 1,
                                            qty: 63.11,
                                            wbsqty: 63.11
                                        }],
                                    index: 1,
                                    sub: []
                                },
                                {
                                    id: 10102,
                                    code: 'L001.02',
                                    desc: 'Urugan sirtu tebal 20cm di bawah batu kali',
                                    start: 0,
                                    qty: 14.03,
                                    uom: 'm3',
                                    material: [
                                        {
                                            id: 2,
                                            code: 'AAA191',
                                            descr: 'SIRTU',
                                            price: 250000,
                                            per: 1,
                                            uom: 'm3',
                                            coef: 1.2,
                                            qty: 16.83,
                                            wbsqty: 14.03
                                        },
                                        {
                                            id: 3,
                                            code: 'CBA045',
                                            descr: 'GELAR SIRTU BWH LANTAI+PADAT',
                                            price: 75000,
                                            per: 1,
                                            uom: 'm3',
                                            coef: 1,
                                            qty: 14.03,
                                            wbsqty: 14.03
                                        }],
                                    index: 2,
                                    sub: []
                                }]
                        }, {
                            id: 102,
                            code: 'L002',
                            desc: 'Pagar Depan',
                            start: 0,
                            qty: 21,
                            uom: 'm\'',
                            material: [],
                            index: 1,
                            sub: []
                        }]
                },
                {
                    id: 2,
                    code: 'B',
                    desc: 'PEKERJAAN SALURAN',
                    start: 0,
                    qty: 0,
                    uom: '',
                    material: [],
                    index: 1,
                    sub: []
                }
            ];
        }
        else if (proj_id === 2) {
            this._wbs = [
                {
                    id: 101,
                    code: 'Y',
                    desc: 'Another Project Base',
                    start: 0,
                    qty: 0,
                    uom: '',
                    material: [],
                    index: 1,
                    sub: []
                },
                {
                    id: 102,
                    code: 'Y-001',
                    desc: 'Task 1',
                    start: 0,
                    qty: 0,
                    uom: '',
                    material: [],
                    index: 2,
                    sub: []
                }
            ];
        }
        //TODO: convert date
        return (this._wbs);
    };
    WbsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WbsService);
    return WbsService;
}());
exports.WbsService = WbsService;
//# sourceMappingURL=wbs.service.js.map