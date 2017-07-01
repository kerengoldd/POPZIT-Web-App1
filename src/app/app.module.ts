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
import { PlayerComponent } from './dashboard/player/player.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

import { YoutubePlayerModule } from 'ng2-youtube-player';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SafePipe } from './safe.pipe';
import {MomentModule} from "angular2-moment";
import { DurationPipe } from './duration.pipe';
import { ShortenPipe } from './shorten.pipe';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AuthComponent,
        CategoryComponent,
        DashboardComponent,
        PlayerComponent,
        SafePipe,
        DurationPipe,
        ShortenPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        YoutubePlayerModule,
        MomentModule
    ],
    providers: [
        AuthService,
        MusicService,
        //Allow refresing the app in production
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        ],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);