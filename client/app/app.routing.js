"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var home_component_1 = require('./home/home.component');
var project_component_1 = require('./project/project.component');
var wbs_component_1 = require('./wbs/wbs.component');
var material_component_1 = require('./material/material.component');
var purchase_order_component_1 = require('./po/purchase-order.component');
var appRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'project',
        component: project_component_1.ProjectComponent
    },
    {
        path: 'material',
        component: material_component_1.MaterialComponent
    },
    {
        path: 'po',
        component: purchase_order_component_1.PurchaseOrderComponent
    },
    {
        path: 'wbs/:id',
        component: wbs_component_1.WbsComponent
    },
    {
        path: '',
        redirectTo: '/wbs/1',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map