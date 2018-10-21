import { Component, OnInit } from '@angular/core';
import {ForgotformService} from "../../service/forgotform.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-forgotform',
    templateUrl: './forgotform.component.html',
    styleUrls: ['./forgotform.component.css']
})
export class ForgotformComponent implements OnInit {

    // constructor() { }
    constructor(private service: ForgotformService) { }

    ngOnInit() {
    }

    form = new FormGroup({
        email: new FormControl('')
    });

    get email(){
        return this.form.get('email');
    }

    sendPasswordResetToMail(input: HTMLInputElement) {
        let emails = input.value;

        this.service.sendPasswordResetToMail(emails)
            .subscribe(response => {

                alert(response.json());
            });
    }

}
