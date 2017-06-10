import {User} from "./user.model";
import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class AuthService {

    constructor(private http:Http) {}

    signup(user:User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://mean-stack-course-chat.herokuapp.com/user', body, {headers: headers})
            .map( (response:Response) => response.json())
            .catch( (error:Response) => Observable.throw(error.json()));
    }

    signin(user:User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://mean-stack-course-chat.herokuapp.com/user/signin', body, {headers: headers})
            .map( (response:Response) => response.json())
            .catch( (error:Response) => Observable.throw(error.json()));
    }

    signout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}