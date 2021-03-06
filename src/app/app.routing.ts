import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "app/home/home.component";
import {AuthComponent} from "./auth/auth.component";
import {CategoryComponent} from "./category/category.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const APP_ROUTES:Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'auth', component: AuthComponent, loadChildren: './auth/auth.module#AuthModule'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);