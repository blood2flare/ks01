import { Injectable } from '@angular/core';

import { Material } from './material';

@Injectable()
export class MaterialService {
    getMaterial(): Material[] {
        return([
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
    }
}