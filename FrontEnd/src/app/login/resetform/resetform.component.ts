
import {Component, ElementRef, OnInit} from '@angular/core';
import {ResetformService} from "../../service/resetform.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-resetform',
    templateUrl: './resetform.component.html',
    styleUrls: ['./resetform.component.css']
})
export class ResetformComponent implements OnInit {

    // constructor(){}
    constructor(private service: ResetformService, private element: ElementRef) { }

    ngOnInit() {
    }

    form = new FormGroup({
        newPassword: new FormControl(''),

        rePassword: new FormControl('')
    });

    get newPassword(){
        return this.form.get('newPassword');
    }

    get rePassword(){
        return this.form.get('rePassword');
    }

    updatePassword(){
        const  formData = new FormData();

        const newPassword = this.element.nativeElement.querySelector('#newPassword').value;
        const rePassword = this.element.nativeElement.querySelector('#rePassword').value;
        formData.append('newPasswords',newPassword);
        formData.append('rePasswords',rePassword);

        if (newPassword == rePassword){
            this.service.updatePassword(formData).subscribe(
                resp => {
                    alert(resp.json());
                }
            )
        }else {
            alert("Password Not Match ... ")
        }
    }


}
