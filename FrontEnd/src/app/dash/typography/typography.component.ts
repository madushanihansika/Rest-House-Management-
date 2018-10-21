import { Component, OnInit } from '@angular/core';
import {TypographyService} from "../../service/typography.service";

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

    typography: any[];
    private url= 'http://jsonplaceholder.typicode.com/typography';

    constructor(private service: TypographyService) {
        service.createPackage(this.url)
            .subscribe(response => {
                this.typography = response.json();
            });
    }

  ngOnInit() {
      this.service.getPackage()
          .subscribe(response =>{
              this.typography = response.json();
          });
  }

    createpackage(id: HTMLInputElement){
        let post: any = {id: id.value};
        id.value = '';

        this.service.createPackage(post)
            .subscribe(response => {
                post['id'] = response.json().id;
                this.typography.splice(0, 0, post);
                console.log(response.json());
            });
    }

}
