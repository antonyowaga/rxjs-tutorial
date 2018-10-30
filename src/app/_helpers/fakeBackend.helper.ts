import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from
    '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor(argument) {
        // code...
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // array in localstorage for registered users
        let user: any[] = JSON.parse(localStorage.getItem('users')) || [];
        let condition;
        // wrap in a delay observable to simulate server api call
        return of(null).pipe(mergeMap (() => {
            if (condition) {
                // code..
            }

            if (condition) {
                // code...
            }

            if (condition) {
                // code...
            }

            if (condition) {
                // code...
            }

            if (condition) {
                // code...
            }

            return next.handle(request);
        }))

        // call materialize and dematerialize to ensure that delay even if an error is thrown
        // https://github.com/Reactive-Extensions
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    }
}


export let fakeBackendProvider = {
    provider: HTTP_INTERCEPTORS,
    userClass: FakeBackendInterceptor,
    multi: true
}
