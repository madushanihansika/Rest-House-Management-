import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemealcataComponent } from "./updatemealcata.component";

describe('UpdatemealcataComponent', () => {
    let component: UpdatemealcataComponent ;
    let fixture: ComponentFixture<UpdatemealcataComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UpdatemealcataComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UpdatemealcataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});