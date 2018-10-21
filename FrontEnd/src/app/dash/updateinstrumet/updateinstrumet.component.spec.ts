import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinstrumetComponent } from "./updateinstrumet.component";

describe('UpdateinstrumetComponent', () => {
    let component: UpdateinstrumetComponent ;
    let fixture: ComponentFixture<UpdateinstrumetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UpdateinstrumetComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UpdateinstrumetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});