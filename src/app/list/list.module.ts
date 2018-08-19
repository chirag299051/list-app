import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllListsComponent } from './all-lists/all-lists.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ListCreateComponent } from './list-create/list-create.component';
import { ListEditComponent } from './list-edit/list-edit.component';
import { AboutComponent } from './about/about.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideNavComponent } from '../shared/side-nav/side-nav.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    RouterModule.forChild([
      {path: 'all',component:AllListsComponent},
      {path: 'about',component:AboutComponent},
      {path: 'list/:listId',component:ListViewComponent},
      {path: 'create',component:ListCreateComponent},
      {path: 'edit/:listId',component:ListEditComponent},
    ])
  ],
  declarations: [SideNavComponent,AllListsComponent, ListViewComponent, ListCreateComponent, ListEditComponent, AboutComponent]
})
export class ListModule { }
