import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-show-single-auther',
  templateUrl: './show-single-auther.component.html',
  styleUrls: ['./show-single-auther.component.css']
})
export class ShowSingleAutherComponent implements OnInit {
  auther: any = {}
  id: any;

  constructor(private _global: GlobalService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)

    this.view(this.id)
  }
  view(id: any) {
    this._global.viewSingleauther(id).subscribe(
      (data) => {
        console.log(data)
        this.auther = data.data.autherData

      },
      (err) => {
        console.log(err)
      },
      () => {
        //   setTimeout(() => {
        //     this.router.navigateByUrl('/admin/showAllAuthers?msg=success')
        //   }, 500)
        // }//final
      }
    )
  }
}
