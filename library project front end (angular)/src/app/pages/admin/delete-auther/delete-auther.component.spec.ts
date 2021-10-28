import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAutherComponent } from './delete-auther.component';

describe('DeleteAutherComponent', () => {
  let component: DeleteAutherComponent;
  let fixture: ComponentFixture<DeleteAutherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAutherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAutherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
