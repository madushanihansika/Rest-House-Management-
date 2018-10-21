import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class TypographyService {

    // private url= 'http://jsonplaceholder.typicode.com/typography';
    private url= 'http://localhost/playground/RestHouses/BackEnd/index.php/typography/';

    constructor(private http: Http) { }

    getPackage(){
        return this.http.get(this.url);
    }
    createPackage(post){
        return this.http.post(this.url,JSON.stringify(post));
    }

}
