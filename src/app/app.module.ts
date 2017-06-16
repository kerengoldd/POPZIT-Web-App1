import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {routing} from "./app.routing";
import {AuthService} from "./auth/auth.service";
import {AuthComponent} from "./auth/auth.component";
import { CategoryComponent } from './category/category.component';
import {MusicService} from "./shared/music.service";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AuthComponent,
        CategoryComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [AuthService, MusicService],
    bootstrap: [AppComponent]
})
export class AppModule { }
