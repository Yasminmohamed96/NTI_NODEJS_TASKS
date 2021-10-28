import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-add-book-data',
  templateUrl: './add-book-data.component.html',
  styleUrls: ['./add-book-data.component.css']
})
export class AddBookDataComponent implements OnInit {
  id: any; dataReturned: any;
  bookdata = { bookName: "", category: "", price: "" }
  constructor(
    private _global: GlobalService,
    private router: Router, private route: ActivatedRoute
    // private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  add(addbookdata: NgForm) {
    if (addbookdata.valid) {
      this._global.addbook(this.id, this.bookdata).subscribe(
        (res: any) => {
          console.log(res.data._id)
          this.dataReturned = res.data._id
        },
        (err: any) => {

        },
        () => {
          addbookdata.resetForm()
          setTimeout(() => {
            this.router.navigateByUrl('/admin/addPdf/' + this.dataReturned)
          }, 500)
        }//final
      )
    }
  }

}
