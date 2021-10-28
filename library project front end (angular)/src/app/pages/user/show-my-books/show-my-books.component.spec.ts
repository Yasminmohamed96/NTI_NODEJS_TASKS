import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyBooksComponent } from './show-my-books.component';

describe('ShowMyBooksComponent', () => {
  let component: ShowMyBooksComponent;
  let fixture: ComponentFixture<ShowMyBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMyBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
