import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-show-all-books',
  templateUrl: './show-all-books.component.html',
  styleUrls: ['./show-all-books.component.css']
})
export class ShowAllBooksComponent implements OnInit {
  Books: any = {}
  constructor(private _global: GlobalService,
    private router: Router) { }

  ngOnInit(): void {
    this.Showallbooks()
  }

  Showallbooks(this: any) {
    this._global.showAllBooks().subscribe(
      (data: any) => {
        this.Books = data.data.booksData
        console.log(this.Books)
      },
      (e: any) => { console.log(e) },
      () => {

      }
    )
  }
  addBookToMyBooks(id: any) {

    this._global.addbookToUser(this._global.userData, id).subscribe(
      (res) => { },
      (err) => {
        console.log(err)
      },
      () => {
        setTimeout(() => {
          this.router.navigateByUrl('/user/showMyBooks?msg=success')
        }, 500)
      }//final
    )

  }
}
