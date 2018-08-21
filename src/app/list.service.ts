import { Injectable } from '@angular/core';

import { HttpClient,HttpErrorResponse } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public allLists;
  public currentList;
  public baseUrl = 'http://list-api.chirag9.com/api/v1/lists';

  constructor(private _http:HttpClient) { 
    console.log('list-http service was called');
  }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }


  public getAllLists():any{
    
    let myResponse = this._http.get(this.baseUrl+'/all');
    console.log(myResponse);
    return myResponse;

  }

  public getSingleListInformation(currentListId): any {

    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentListId)
    return myResponse
  }

  createList(listData): any {

    let myResponse = this._http.post(this.baseUrl + '/create', listData)
    return myResponse;

  } // end create blog

  deleteList(listId): any {

    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + listId + '/delete', data);
    return myResponse;

  }// end delete blog

  editList(listId,listData): any {

    let myResponse = this._http.put(this.baseUrl + '/' + listId + '/edit', listData)
    return myResponse;

  }
}
