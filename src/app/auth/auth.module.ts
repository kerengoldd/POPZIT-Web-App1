import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {authRouting} from "./auth.routing";
import {SignoutComponent} from "./signout/signout.component";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";

@NgModule({
    declarations: [
        SignoutComponent,
        SigninComponent,
        SignupComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        authRouting
    ],
})
export class AuthModule {}