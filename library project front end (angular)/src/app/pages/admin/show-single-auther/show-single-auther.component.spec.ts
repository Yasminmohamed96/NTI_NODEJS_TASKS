import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSingleAutherComponent } from './show-single-auther.component';

describe('ShowSingleAutherComponent', () => {
  let component: ShowSingleAutherComponent;
  let fixture: ComponentFixture<ShowSingleAutherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSingleAutherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSingleAutherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
