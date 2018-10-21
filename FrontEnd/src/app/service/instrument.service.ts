import { Injectable } from '@angular/core';
import {Http} from "@angular/http";


@Injectable()
export class InstrumentService {

    // private url= 'http://jsonplaceholder.typicode.com/instrument';
     private url= 'http://localhost/playground/RestHouses/BackEnd/index.php/instrument/';

     constructor(private http: Http) { }

     getinstrument(){
         return this.http.get(this.url);
     }
     createinstrument(post) {
         return this.http.post(this.url, JSON.stringify(post));
     }


    // private host = window.location.hostname;
    // private headers = new Headers({'Content-Type': 'application/json'});
    // private URL='http://localhost/playground/RestHouses/BackEnd/index.php/instrument/'
    // // private usersURL = `http://${this.host}/api/v1/users`;
    //
    // constructor(private http: Http) {
    //
    // };
    //
    // add(user: InstrumentService): Promise<InstrumentService>{
    //     return this.http.post(this.URL, JSON.stringify(user), {headers:this.Headers})
    //         .toPromise()
    //         .then(response => response.json() as InstrumentService)
    //         // .catch(this.handleError)
    // }



}

