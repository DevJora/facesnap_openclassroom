import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthSerive {
    private token = 'MyFakeToken';


    getToken(): string {
        return this.token;
    }

}