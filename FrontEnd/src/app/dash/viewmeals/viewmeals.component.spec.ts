import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmealsComponent } from "./viewmeals.component";

describe('ViewmealsComponent', () => {
    let component: ViewmealsComponent ;
    let fixture: ComponentFixture<ViewmealsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ViewmealsComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewmealsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});