/*
* This file houses all the modules routes in 
* the applicaiton, which we will bootstrap in main ts
*/
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminView} from '../admin/admin.view.component';
import { LandingView } from '../landing/landing.view.component';


const routes: Routes = [
	{ path: 'home', component: LandingView},
	{ path: 'admin', component: AdminView }
]

export const appRoutingProviders: any[] = [];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);