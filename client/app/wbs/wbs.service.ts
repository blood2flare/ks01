import { Injectable } from '@angular/core';

import { Project } from '../project/project';
import { Wbs } from './wbs';
import { Material } from '../material/material';

@Injectable()
export class WbsService {
    private _wbs: Wbs[];

    constructor(
        
    ) { }
    
    getWbs(proj_id:number) : Wbs[] {
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
            ] 
        } else if (proj_id === 2) {
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
            ] 
        }
        //TODO: convert date
        return (this._wbs);
    }

}