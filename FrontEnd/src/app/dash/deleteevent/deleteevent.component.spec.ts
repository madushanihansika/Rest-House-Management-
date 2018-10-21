import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteeventComponent } from "./deleteevent.component";

describe('DeleteeventComponent', () => {
    let component: DeleteeventComponent ;
    let fixture: ComponentFixture<DeleteeventComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DeleteeventComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DeleteeventComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});