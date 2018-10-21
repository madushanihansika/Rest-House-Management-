import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ResetformService {

  private url= 'http://localhost/playground/RestHouses/BackEnd/index.php/resetform';
    // private url= 'http://jsonplaceholder.typicode.com/resetform';

    constructor(private http: Http) { }

    updatePassword(formData){
      return this.http.post(this.url,formData);
    }
}
