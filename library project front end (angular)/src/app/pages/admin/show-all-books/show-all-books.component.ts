import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-show-all-books',
  templateUrl: './show-all-books.component.html',
  styleUrls: ['./show-all-books.component.css']
})
export class showallBooksComponent implements OnInit {
  allBooks: any = {}
  constructor(private _global: GlobalService,
    private router: Router) { }

  ngOnInit(): void {
    this.getallBooks()
  }
  getallBooks() {
    this._global.showallBooks().subscribe(
      (data: any) => {
        this.allBooks = data.data.booksData
        console.log(this.allBooks)
      },
      (e: any) => { console.log(e) },
      () => {

      }
    )
  }

  deletee(id: any, index: any) {
    this.allBooks.splice(index, 1);
    this._global.deleteBooks(id).subscribe(
      (res) => { },
      (err) => {
        console.log(err)
      },
      () => {
        setTimeout(() => {
          this.router.navigateByUrl('/admin/showAllBooks?msg=success')
        }, 500)
      }//final
    )
  }
  viewSingleBook(id: any) { this.router.navigateByUrl('/admin/showsinglebook/' + id) }
}
