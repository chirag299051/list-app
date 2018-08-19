import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from '../../list.service';
import { ToastrService } from 'ngx-toastr';

import { Location } from '@angular/common';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  providers: [Location]
})
export class ListViewComponent implements OnInit {

  public currentList;

  constructor(private _route: ActivatedRoute, private router: Router, public listService:ListService, private toastr: ToastrService, private location: Location) { }

  ngOnInit() {
    console.log("ngOnInit called")

    let myListId = this._route.snapshot.paramMap.get('listId')
    console.log(myListId)
    
    this.listService.getSingleListInformation(myListId).subscribe(

      data => {
        console.log(data);
        this.currentList = data["data"];

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
  }

  deleteThisList(): any {

    this.listService.deleteList(this.currentList.listId).subscribe(

      data => {
        console.log(data);
        this.toastr.success('List Deleted successfully', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/all']);
        }, 1000)

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error('Some error occured', 'Error');
      }
    )
}// end delete this blog 


  goBackToPreviousPage(): any {

    this.location.back();

  }

}
