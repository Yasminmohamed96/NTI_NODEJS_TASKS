import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit {
  allUsers: any = {}
  constructor(private _global: GlobalService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers() {
    this._global.showAllusers().subscribe(
      (data: any) => {
        this.allUsers = data.data.usersData
        console.log(this.allUsers)
      },
      (e: any) => { console.log(e) },
      () => {

      }
    )
  }
  editUser(id: any) {
    this.router.navigateByUrl('/admin/editProfile/' + id.toString())
  }

  deleteUser(id: any) {
    this._global.deleteUserData(id).subscribe(
      (res) => { },
      (err) => {
        console.log(err)
      },
      () => {
        setTimeout(() => {
          this.router.navigateByUrl('/admin/showAllUsers?msg=success')
        }, 0)
      }//final
    )
  }
  viewSingleUser(id: any) { this.router.navigateByUrl('/admin/showSingleUser/' + id) }
}
