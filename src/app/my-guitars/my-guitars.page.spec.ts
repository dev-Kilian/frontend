import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyGuitarsPage } from './my-guitars.page';

describe('MyGuitarsPage', () => {
  let component: MyGuitarsPage;
  let fixture: ComponentFixture<MyGuitarsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGuitarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
