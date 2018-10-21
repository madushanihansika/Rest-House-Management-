import { Component, OnInit } from '@angular/core';
import {LoginformService} from "../../service/loginform.service";

@Component({
    selector: 'app-loginform',
    templateUrl: './loginform.component.html',
    styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

    posts: any[];
    constructor(private service: LoginformService) {
        this.service.getEmail().subscribe(response => {
            this.posts = response.json();
        });
    }

    ngOnInit() {
    }

}
