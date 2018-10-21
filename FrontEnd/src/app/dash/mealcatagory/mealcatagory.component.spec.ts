import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealcatagoryComponent} from "./mealcatagory.component";

describe('MealcatagoryComponent', () => {
    let component: MealcatagoryComponent ;
    let fixture: ComponentFixture<MealcatagoryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MealcatagoryComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MealcatagoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});