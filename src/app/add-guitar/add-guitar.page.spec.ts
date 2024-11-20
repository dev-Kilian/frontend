import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGuitarPage } from './add-guitar.page';

describe('AddGuitarPage', () => {
  let component: AddGuitarPage;
  let fixture: ComponentFixture<AddGuitarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuitarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
