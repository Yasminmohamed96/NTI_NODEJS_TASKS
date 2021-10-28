import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-show-single-book',
  templateUrl: './show-single-book.component.html',
  styleUrls: ['./show-single-book.component.css']
})
export class showsinglebookComponent implements OnInit {
  // viewSingleBook
  id: any;
  book: any = {};
  constructor(private _global: GlobalService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)

    this.view(this.id)
  }
  view(id: any) {
    this._global.viewSingleBook(id).subscribe(
      (data) => {
        console.log(data)
        this.book = data.data.bookData

      },
      (err) => {
        console.log(err)
      },
      () => {
        //   setTimeout(() => {
        //     this.router.navigateByUrl('/admin/showAllUsers?msg=success')
        //   }, 500)
        // }//final
      }
    )
  }
}
