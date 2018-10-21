import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemealComponent } from "./updatemeal.component";

describe('UpdatemealComponent', () => {
    let component: UpdatemealComponent ;
    let fixture: ComponentFixture<UpdatemealComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UpdatemealComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UpdatemealComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});