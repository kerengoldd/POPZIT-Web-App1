import {Component, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

    bodyClasses = "loginBackground";

    constructor() { }

    ngOnInit() {
        $('body').addClass(this.bodyClasses);
    }

    ngOnDestroy() {
        $('body').removeClass(this.bodyClasses);
    }

}