import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateeventsComponet } from "./updateevents.component";

describe('UpdateeventsComponet', () => {
    let component: UpdateeventsComponet ;
    let fixture: ComponentFixture<UpdateeventsComponet>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UpdateeventsComponet ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UpdateeventsComponet);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});