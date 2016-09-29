import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable()
export class ProjectService {
    
    getProject() : Project[] {
        return ([
            {
                id: 1,
                code: '001',
                desc: 'project001',
                start: 20160829,
                pm: 'andy'
            },
            {
                id: 2,
                code: '002',
                desc: 'project002',
                start: 20160831,
                pm: 'lol'
            }
        ])
    }

}