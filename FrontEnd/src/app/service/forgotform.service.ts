import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ForgotformService {

    private url= 'http://localhost/playground/RestHouses/BackEnd/index.php/forgotform/';

    // private url= 'http://jsonplaceholder.typicode.com/forgotform';

    constructor(private http: Http ) { }

    sendPasswordResetToMail(emails){
      return this.http.post(this.url + '/' + emails,emails);
    }
}
