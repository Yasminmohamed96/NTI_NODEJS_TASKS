import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllAuthersComponent } from './show-all-authers.component';

describe('ShowAllAuthersComponent', () => {
  let component: ShowAllAuthersComponent;
  let fixture: ComponentFixture<ShowAllAuthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllAuthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllAuthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
