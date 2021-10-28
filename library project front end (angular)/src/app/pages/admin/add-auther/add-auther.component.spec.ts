import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAutherComponent } from './add-auther.component';

describe('AddAutherComponent', () => {
  let component: AddAutherComponent;
  let fixture: ComponentFixture<AddAutherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAutherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAutherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
