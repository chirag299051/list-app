import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {FormModule} from "@angular/core";

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { ListModule } from './list/list.module';
import { UserModule } from './user/user.module';
import { LoginComponent } from './user/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SignupComponent } from './user/signup/signup.component';
import { AppService } from './app.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { FooterComponent } from './shared/footer/footer.component';

import { AllListsComponent } from './list/all-lists/all-lists.component';
import { ListViewComponent } from './list/list-view/list-view.component';
import { ListCreateComponent } from './list/list-create/list-create.component';
import { ListEditComponent } from './list/list-edit/list-edit.component';

import { ListService } from './list.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ListModule,
    UserModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: 'signup', component: SignupComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '*', component: LoginComponent },
      { path: '**', component: LoginComponent },

      {path: 'all',component: AllListsComponent},
      {path: 'list/:listId',component: ListViewComponent},
      {path: 'create',component: ListCreateComponent},
      {path: 'edit/:listId',component: ListEditComponent},
    ])
  ],

  providers: [AppService,HttpClient,ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
