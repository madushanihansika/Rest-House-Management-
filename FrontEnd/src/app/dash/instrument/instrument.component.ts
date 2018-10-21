import { Component, OnInit } from '@angular/core';
import {InstrumentService} from "../../service/instrument.service";

@Component({
    selector: 'app-instrument',
    templateUrl: './instrument.component.html',
    styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements OnInit {

    instrument: any[];
    private url= 'http://jsonplaceholder.typicode.com/instrument';


    constructor(private service: InstrumentService) {
        service.createinstrument(this.url)
            .subscribe(response => {
                this.instrument = response.json();
            });
    }

    ngOnInit() {
        this.service.getinstrument()
            .subscribe(response =>{
                this.instrument = response.json();
            });
    }

    createinstrument(id: HTMLInputElement){
        let post: any = {id: id.value};
        id.value = '';

        this.service.createinstrument(post)
            .subscribe(response => {
                post['id'] = response.json().id;
                this.instrument.splice(0, 0, post);
                console.log(response.json());
            });
    }

}
