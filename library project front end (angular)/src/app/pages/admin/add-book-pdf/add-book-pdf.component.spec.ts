import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookPdfComponent } from './add-book-pdf.component';

describe('AddBookPdfComponent', () => {
  let component: AddBookPdfComponent;
  let fixture: ComponentFixture<AddBookPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
