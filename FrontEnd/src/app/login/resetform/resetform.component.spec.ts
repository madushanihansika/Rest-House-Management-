import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetformComponent } from "./resetform.component";

describe('ResetformComponent', () => {
    let component: ResetformComponent;
    let fixture: ComponentFixture<ResetformComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ResetformComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResetformComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
