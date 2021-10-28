import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-edit-auther',
  templateUrl: './edit-auther.component.html',
  styleUrls: ['./edit-auther.component.css']
})
export class EditAutherComponent implements OnInit {
  editautherData: any = {}
  emailError: string = "";
  id: any;
  constructor(private _global: GlobalService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this._global.viewSingleauther(this.id).subscribe(
      (data) => {
        this.editautherData = data.data.autherData
        console.log(this.editautherData)
      },
      (e) => { console.log(e) },
      () => {

      })

  }
  edit(editAuther: NgForm) {
    if (editAuther.valid) {
      this._global.editAuther(this.id, this.editautherData).subscribe(
        (res) => { },
        (err) => {
          if (err.error.data.includes('email')) this.emailError = "email used before"
          console.log(err)
        },
        () => {
          this.emailError = ""
          editAuther.resetForm()
          setTimeout(() => {
            this.router.navigateByUrl('/admin/showAllAuthers?msg=success')
          }, 500)
        }//final
      )
    }
  }

}
