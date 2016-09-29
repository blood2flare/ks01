import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Material } from '../material/material';

@Injectable()
export class ActiveMatService {
    mode: number = 0;
    modeStr: string[] = ['', 'Create', 'Change', 'Display']; 

    private _activeMatSource = new Subject<Material>();
    activeMat$ = this._activeMatSource.asObservable();

    setActiveMat(mat: Material) {
        this._activeMatSource.next(mat);
    }
    resetMat()  {
        this._activeMatSource.next(undefined);
    }
    createComp(mat: Material) {
        
    }
}