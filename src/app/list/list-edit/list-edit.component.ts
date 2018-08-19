import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { ListService } from "../../list.service";

import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css'],
  providers: [Location]
})
export class ListEditComponent implements OnInit {

  public currentList;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];
  
  constructor(private _route: ActivatedRoute, private router: Router, private listService: ListService, private location: Location, private toastr: ToastrService) {
  }


  ngOnInit() {
    let myListId = this._route.snapshot.paramMap.get('listId');
    console.log(myListId)
 
    // this.listService.getSingleListInformation(myListId).subscribe(

    //   data => {
    //     console.log(data);
    //     this.currentList = data["data"];
    //     console.log("current List is");
    //     console.log(this.currentList);

    //   },
    //   error => {
    //     console.log("some error occured");
    //     console.log(error.errorMessage)
    //   }


    // )

    this.currentList={title: "hmcv,", description: "xcvbn", listBody: "sdfghjklkjhghjkn", category: "Work"};
  }

  editThisList(): any {
debugger;
    this.listService.editList(this.currentList.ListId,this.currentList).subscribe(

      data => {
        debugger;
        console.log(data);
        this.toastr.success('List edited successfully', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/list',this.currentList.listId]);
        }, 1000)

      },
      error => {
        debugger;
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error('Some error occured', 'Error');
      }


    )


  }

  goBackToPreviousPage(): any {

    this.location.back();

  }

}
