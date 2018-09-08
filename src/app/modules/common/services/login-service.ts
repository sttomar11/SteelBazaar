import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    private _loggedIn = false;

    constructor() {}

    loggedIn() {
        return this._loggedIn;
    }

    logIn() {
        this._loggedIn = true;
    }
}
