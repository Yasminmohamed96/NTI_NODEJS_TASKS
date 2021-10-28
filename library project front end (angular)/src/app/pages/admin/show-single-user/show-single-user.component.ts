import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-show-single-user',
  templateUrl: './show-single-user.component.html',
  styleUrls: ['./show-single-user.component.css']
})
export class ShowSingleUserComponent implements OnInit {
  id: any;
  viewData: any = {};
  constructor(private _global: GlobalService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)

    this.view(this.id)
  }
  view(id: any) {
    this._global.viewSingleUserData(id).subscribe(
      (data) => {
        console.log(data)
        this.viewData = data.data.userData

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
