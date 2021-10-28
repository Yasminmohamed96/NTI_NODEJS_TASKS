import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-add-book-pdf',
  templateUrl: './add-book-pdf.component.html',
  styleUrls: ['./add-book-pdf.component.css']
})
export class AddBookPdfComponent implements OnInit {
  id: any = "";
  file: any;

  constructor(private _global: GlobalService,
    private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit(
  ): void {
    this.id = this.route.snapshot.paramMap.get('id');

  }

  onChangeFile(event: any) { this.file = event.target.files[0] }
  upimg() {
    const myData = new FormData()
    myData.append("pdf", this.file, this.file.name)

    this._global.addPdf(this.id, myData).subscribe(
      (data: any) => {
        console.log(data)
      },
      (err: any) => {
        console.log(err)
      },
      () => {

        setTimeout(() => {
          this.router.navigateByUrl('/admin/showAllBooks?msg=success')
        }, 500)
      }//final
    )
  }
  ///////////////////////
}

