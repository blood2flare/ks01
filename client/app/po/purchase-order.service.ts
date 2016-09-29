import { Injectable } from '@angular/core';

import { PurchaseOrder } from './purchase-order';

@Injectable()
export class PurchaseOrderService {
    getPO(): PurchaseOrder[] {
        return([
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
            },{
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
    }

    getPObyID(poID: number): PurchaseOrder {
        return(
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
            }
        );
    }
}