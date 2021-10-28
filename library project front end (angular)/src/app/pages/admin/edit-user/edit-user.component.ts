import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  edituserData: any = {}
  emailError: string = "";
  id: any;
  constructor(private _global: GlobalService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this._global.viewSingleUserData(this.id).subscribe(
      (data) => {
        this.edituserData = data.data.userData
        console.log(this.edituserData)
      },
      (e) => { console.log(e) },
      () => {

      })

  }
  edit(editUser: NgForm) {
    if (editUser.valid) {
      this._global.editUserData(this.id, this.edituserData).subscribe(
        (res) => { },
        (err) => {
          if (err.error.data.includes('email')) this.emailError = "email used before"
          console.log(err)
        },
        () => {
          this.emailError = ""
          editUser.resetForm()
          setTimeout(() => {
            this.router.navigateByUrl('/admin/showAllUsers?msg=success')
          }, 500)
        }//final
      )
    }
  }

}
