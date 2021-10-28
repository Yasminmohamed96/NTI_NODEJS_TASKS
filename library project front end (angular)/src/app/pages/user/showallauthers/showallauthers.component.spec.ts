import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallauthersComponent } from './showallauthers.component';

describe('ShowallauthersComponent', () => {
  let component: ShowallauthersComponent;
  let fixture: ComponentFixture<ShowallauthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallauthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallauthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
