import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './../_models/user';

const config = { 'apiUrl': 'http://localhost:4200' };

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {
        // code...
    }


    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${config.apiUrl}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`{config.apiUrl}/users/` + id);
    }
}
