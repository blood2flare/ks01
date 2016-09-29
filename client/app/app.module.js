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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms'); // for ngModel
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var top_header_component_1 = require('./home/top-header.component');
var page_footer_component_1 = require('./home/page-footer.component');
// import { HomeComponent } from './home/home.component';
var login_component_1 = require('./login/login.component');
var project_component_1 = require('./project/project.component');
var wbs_component_1 = require('./wbs/wbs.component');
var wbs_detail_component_1 = require('./wbs/wbs-detail.component');
var comp_detail_component_1 = require('./wbs/comp-detail.component');
var material_component_1 = require('./material/material.component');
var wbs_tree_element_component_1 = require('./wbs/wbs-tree-element.component');
var comp_tree_element_component_1 = require('./wbs/comp-tree-element.component');
var active_wbs_service_1 = require('./wbs/active-wbs.service');
var active_mat_service_1 = require('./wbs/active-mat.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing
            ],
            declarations: [
                // HomeComponent,
                top_header_component_1.TopHeaderComponent,
                page_footer_component_1.PageFooterComponent,
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                project_component_1.ProjectComponent,
                wbs_component_1.WbsComponent,
                wbs_detail_component_1.WbsDetailComponent,
                comp_detail_component_1.CompDetailComponent,
                material_component_1.MaterialComponent,
                wbs_tree_element_component_1.WbsTreeElementComponent,
                comp_tree_element_component_1.CompTreeElementComponent
            ],
            providers: [
                active_wbs_service_1.ActiveWbsService,
                active_mat_service_1.ActiveMatService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map