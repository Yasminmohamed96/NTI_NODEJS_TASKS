import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAutherComponent } from './edit-auther.component';

describe('EditAutherComponent', () => {
  let component: EditAutherComponent;
  let fixture: ComponentFixture<EditAutherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAutherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAutherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
