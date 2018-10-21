import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class MealcatagoryService {

    private url= 'http://jsonplaceholder.typicode.com/mealcatagory';
    //private url= 'http://localhost/playground/RestHouses/BackEnd/index.php/mealcatagory/';

    constructor(private http: Http) { }

    getmealcatagory(){
        return this.http.get(this.url);
    }
    createmealcata(post){
        return this.http.post(this.url,JSON.stringify(post));
    }

}
