import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

import { ListService } from '../../list.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-create',
  templateUrl: './list-create.component.html',
  styleUrls: ['./list-create.component.css']
})
export class ListCreateComponent implements OnInit {

  constructor(private listService:ListService, private _route: ActivatedRoute, private router: Router,private toastr: ToastrService) {
  }

  public listTitle: string;
  public listBodyHtml: string;
  public listDescription: string;
  public listCategory: string;
  public possibleCategories = ["Work", "Social", "Shopping", "Other"]

  ngOnInit() {
  }

  public createList(): any {

    let listData = {

      title: this.listTitle,
      description: this.listDescription,
      bodyHtml: this.listBodyHtml,
      category: this.listCategory

    }

    console.log(listData);

    this.listService.createList(listData).subscribe(

      data => {
        console.log("list Created")
        console.log(data);
        this.toastr.success('List Created successfully','Success');

        setTimeout(()=> {
          this.router.navigate(['/list',data.data.listId]);
        }, 1000)

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error('Some error occured', 'Error');
      }

    )

  }


}
