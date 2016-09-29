import { Component } from '@angular/core';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
    selector: 'c-project',
    templateUrl: '/app/project/project.component.html',
    providers: [
        ProjectService
    ]
})

export class ProjectComponent {
    private projs: Project[];

    constructor (
        private _projectService: ProjectService
    ) { }

    showWbs() {
        
    }
    
    ngOnInit() {
        this.projs = this._projectService.getProject();
    }
}