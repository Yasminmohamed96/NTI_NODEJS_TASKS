import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsingleautherComponent } from './showsingleauther.component';

describe('ShowsingleautherComponent', () => {
  let component: ShowsingleautherComponent;
  let fixture: ComponentFixture<ShowsingleautherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsingleautherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsingleautherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
