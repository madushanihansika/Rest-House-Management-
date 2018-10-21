import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateclienteventComponent } from "./createclientevent.component";

describe('CreateclienteventComponent', () => {
    let component: CreateclienteventComponent ;
    let fixture: ComponentFixture<CreateclienteventComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CreateclienteventComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateclienteventComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});