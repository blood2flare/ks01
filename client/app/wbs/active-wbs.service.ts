import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Wbs } from './wbs';

@Injectable()
export class ActiveWbsService {
    mode: number = 0;
    modeStr: string[] = ['', 'Create', 'Change', 'Display']; 

    private _activeWbsSource = new Subject<Wbs>();
    activeWbs$ = this._activeWbsSource.asObservable();

    setActiveWbs(wbs: Wbs) {
        this._activeWbsSource.next(wbs);
    }
    resetWbs() {
        this._activeWbsSource.next(undefined);
    }
    createWbs(wbs: Wbs) {
        
    }
}