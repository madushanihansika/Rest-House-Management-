import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemealComponent } from "./deletemeal.component";

describe('DeletemealComponent', () => {
    let component: DeletemealComponent ;
    let fixture: ComponentFixture<DeletemealComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DeletemealComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DeletemealComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});