import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-show-my-books',
  templateUrl: './show-my-books.component.html',
  styleUrls: ['./show-my-books.component.css']
})
export class ShowMyBooksComponent implements OnInit {
  myBooks: any = {}
  pdfFilePath = "http://localhost:3000/findAsset/public/1634942944641.pdf"
  constructor(private _global: GlobalService,
    private router: Router) { }

  ngOnInit(): void {
    this.showMyBooks()

  }
  showMyBooks(this: any) {
    this._global.show_myBooks().subscribe(
      (data: any) => {
        this.myBooks = data.data.mybooksData
        console.log(this.myBooks)
      },
      (e: any) => { console.log(e) },
      () => {

      }
    )
  }
  //pdfFilePath = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  // <img src="http://localhost:3000/public/1.png">
  //http://localhost:3000/findAsset/{{userData.image}}
  // downloadBookPdf(bookDist: any) {

  //   this.pdfFilePath = "http://localhost:3000/findAsset/" + bookDist
  //   console.log(this.pdfFilePath)
  // }
}