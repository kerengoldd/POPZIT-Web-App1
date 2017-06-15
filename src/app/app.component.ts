import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {User} from "./auth/user.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    user:User;

    constructor(public authService:AuthService) {}

    ngOnInit() {
        console.log('blaxx222x');
        this.user = this.authService.signedUser;
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}
