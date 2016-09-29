import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // for ngModel

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { TopHeaderComponent } from './home/top-header.component';
import { PageFooterComponent } from './home/page-footer.component';

// import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { WbsComponent } from './wbs/wbs.component';
import { WbsDetailComponent } from './wbs/wbs-detail.component';
import { CompDetailComponent } from './wbs/comp-detail.component';
import { MaterialComponent } from './material/material.component';
import { WbsTreeElementComponent } from './wbs/wbs-tree-element.component';
import { CompTreeElementComponent } from './wbs/comp-tree-element.component';
import { ActiveWbsService } from './wbs/active-wbs.service';
import { ActiveMatService } from './wbs/active-mat.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],

    declarations: [
        // HomeComponent,
        TopHeaderComponent,
        PageFooterComponent,
        AppComponent,
        LoginComponent,
        ProjectComponent,
        WbsComponent,
        WbsDetailComponent,
        CompDetailComponent,
        MaterialComponent,
        WbsTreeElementComponent,
        CompTreeElementComponent
    ],

    providers: [
        ActiveWbsService,
        ActiveMatService
    ],
   
    bootstrap: [ AppComponent ]
})

export class AppModule { }