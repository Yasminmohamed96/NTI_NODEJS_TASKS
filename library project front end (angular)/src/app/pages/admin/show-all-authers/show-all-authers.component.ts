import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-show-all-authers',
  templateUrl: './show-all-authers.component.html',
  styleUrls: ['./show-all-authers.component.css']
})
export class ShowAllAuthersComponent implements OnInit {

  allAuthers: any = {}
  constructor(private _global: GlobalService,
    private router: Router) { }

  ngOnInit(): void {
    this.getallAuthers()
  }
  getallAuthers() {
    this._global.showallAuthers().subscribe(
      (data: any) => {
        this.allAuthers = data.data.authersData
        console.log(this.allAuthers)
      },
      (e: any) => { console.log(e) },
      () => {

      }
    )
  }
  edit(id: any) {
    this.router.navigateByUrl('/admin/editAuthre/' + id.toString())
  }

  deletee(id: any, index: any) {
    this.allAuthers.splice(index, 1);
    this._global.deleteAuther(id).subscribe(
      (res) => { },
      (err) => {
        console.log(err)
      },
      () => {
        setTimeout(() => {
          this.router.navigateByUrl('/admin/showAllAuthers?msg=success')
        }, 500)
      }//final
    )
  }
  viewSingleAuther(id: any) { this.router.navigateByUrl('/admin/showSingleAuthre/' + id) }
  ADDBOOK(id: any) { this.router.navigateByUrl('/admin/addBook/' + id) }
}
