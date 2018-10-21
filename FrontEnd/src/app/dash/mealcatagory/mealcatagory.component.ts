import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {MealcatagoryService} from "../../service/mealcatagory.service";

@Component({
    selector: 'app-mealcatagory',
    templateUrl: './mealcatagory.component.html',
    styleUrls: ['./mealcatagory.component.css']
})
export class MealcatagoryComponent implements OnInit {

    mealcatagory: any[];
    // private url= 'http://jsonplaceholder.typicode.com/mealcatagory';
    private url= 'http://localhost/playground/RestHouses/BackEnd/index.php/mealcatagory/';

    constructor(private service: MealcatagoryService) {
        service.createmealcata(this.url)
            .subscribe(response => {
                this.mealcatagory = response.json();
            });
    }

    ngOnInit() {
        this.service.getmealcatagory()
            .subscribe(response =>{
                this.mealcatagory = response.json();
            });
    }

    createmealcata(id: HTMLInputElement){
        let post: any = {id: id.value};
        id.value = '';

        this.service.createmealcata(post)
            .subscribe(response => {
                post['id'] = response.json().id;
                this.mealcatagory.splice(0, 0, post);
                console.log(response.json());
            });
    }
}
