import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    mainPath = '/auth/signin';

    constructor(private authService:AuthService) { }

    ngOnInit() {
        this.mainPath = this.authService.isLoggedIn() ? '/category' : '/auth/signin';
    }
}
