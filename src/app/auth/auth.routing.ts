import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {SignoutComponent} from "./signout/signout.component";

const AUTH_ROUTES:Routes = [
    {path: '', redirectTo: 'signup', pathMatch: 'full'},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'signout', component: SignoutComponent},
];

export const authRouting = RouterModule.forChild(AUTH_ROUTES);