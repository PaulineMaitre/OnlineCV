import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BackOfficeComponent} from './back-office/back-office.component';
import {AppComponent} from './app.component';
import {FrontOfficeComponent} from './front-office/front-office.component';
import {MainListComponent} from './back-office/edit/main-list/main-list.component';
import {EditComponent} from './back-office/edit/edit.component';
import {HomeComponent} from './home/home.component';
import {NewUserComponent} from './new-user/new-user.component';


// TODO : Ajouter les routes Front/autre
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: ':id', component: FrontOfficeComponent},
  {path: 'back/:id', component: BackOfficeComponent},
  {path: 'back/edit/:id', component: EditComponent},
  {path: 'user/new', component: NewUserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
