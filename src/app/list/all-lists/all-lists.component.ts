import { Component, OnInit } from '@angular/core';
import { ListService } from '../../list.service';

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.css']
})
export class AllListsComponent implements OnInit {

  public allLists;

  constructor(public listService:ListService) { }

  ngOnInit() {

     this.listService.getAllLists().subscribe(

      data =>{
        console.log("logging data")
        console.log(data);
        this.allLists = data["data"];
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
    

  }

}
