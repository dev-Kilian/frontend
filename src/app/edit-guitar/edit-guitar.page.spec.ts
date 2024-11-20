import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditGuitarPage } from './edit-guitar.page';

describe('EditGuitarPage', () => {
  let component: EditGuitarPage;
  let fixture: ComponentFixture<EditGuitarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGuitarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
