import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmealComponent } from "./addmeal.component";

describe('AddmealComponent', () => {
    let component: AddmealComponent ;
    let fixture: ComponentFixture<AddmealComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddmealComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddmealComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});