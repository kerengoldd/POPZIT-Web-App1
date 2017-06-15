import {Component, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {AuthService} from "../auth/auth.service";
import {User} from "../auth/user.model";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

    bodyClass = 'dashboardBackground';

    constructor(public authService:AuthService) { }

    ngOnInit() {
        $('body').addClass(this.bodyClass);

    }

    ngOnDestroy() {
        $('body').removeClass(this.bodyClass);
    }
}
