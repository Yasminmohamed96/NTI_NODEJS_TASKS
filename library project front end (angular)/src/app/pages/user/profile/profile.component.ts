import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = { name: "", gender: "", age: "", email: "", phone: "" }
  userData: any = {}
  constructor(private _global: GlobalService,
    private router: Router) { }

  ngOnInit(): void {
    this.profile()
  }

  profile() {
    this._global.profile().subscribe(
      (data) => {
        this.userData = data.data
        console.log(this.userData)
      },
      (e) => { console.log(e) },
      () => {

      }
    )
  }
  // file: any
  // onChangeFile(event: any) { this.file = event.target.files[0] }
  // upimg() {
  //   const myData = new FormData()
  //   myData.append("pdf", this.file, this.file.name)

  //   this._global.addPdf(myData).subscribe(data => { console.log(data) })
  // }
}
