import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { WbsComponent } from './wbs/wbs.component';
import { MaterialComponent } from './material/material.component';
import { PurchaseOrderComponent } from './po/purchase-order.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'project',
        component: ProjectComponent
    },
    {
        path: 'material',
        component: MaterialComponent
    },
    {
        path: 'po',
        component: PurchaseOrderComponent
    },
    {
        path: 'wbs/:id',
        component: WbsComponent
    },
    {
        path: '',
        redirectTo: '/wbs/1',
        pathMatch: 'full'
    }
    // {
    //     path: 'skin/:s',
    //     redirectTo: '*',
    //     pathMatch: 'full'
    // }
//    {
//        path: 'dashboard',
//        component: DashboardComponent
//    },
//    {
//        path: '',
//        redirectTo: '/dashboard',
//        pathMatch: 'full'
//    },
//    {
//        path: 'detail/:id',
//        component: HeroDetailComponent
//    }
] 

export const routing = RouterModule.forRoot(appRoutes);
