import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    private config: string;

    constructor(private http: HttpClient) {
        // code...
    }

    login(username: string, password: string) {
        let config = { 'apiUrl': 'http://localhost:4200' };
        return this.http.post<any>(
            `${config.apiUrl}/users/authenticate/`, { username: username, password: password})
            .pipe(map(user => {
                // login successful if there is a jwt token in the response
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }))
    }

    logout() {
        // remove user from localstorage
        localStorage.removeItem('currentUser');
    }
}
