import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class LoginformService {

    // private url= 'http://jsonplaceholder.typicode.com/loginform';
    private url= 'http://localhost/playground/RestHouses/BackEnd/index.php/loginform/';

    constructor(private http: Http) { }

    getEmail(){
        return this.http.get(this.url);
    }
    createEmail(post){
        return this.http.post(this.url,JSON.stringify(post));
    }

}
