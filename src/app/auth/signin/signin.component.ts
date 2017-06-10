import {Component, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {

    bodyClasses = "loginBackground";

    constructor() { }

    ngOnInit() {
        $('body').addClass(this.bodyClasses);
    }
    ngOnDestroy() {
        $('body').removeClass(this.bodyClasses);
    }
}
