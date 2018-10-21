/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LocationtypeComponent } from './locationtype.component';

describe('LocationtypeComponent', () => {
    let component: LocationtypeComponent;
    let fixture: ComponentFixture<LocationtypeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ LocationtypeComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LocationtypeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
