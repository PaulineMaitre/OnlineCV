import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BackOfficeComponent} from './back-office/back-office.component';
import {AppComponent} from './app.component';
import {FrontOfficeComponent} from './front-office/front-office.component';


// TODO : Ajouter les routes Front/autre
const routes: Routes = [
  {path: 'back', component: BackOfficeComponent},
  {path: '', component: FrontOfficeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
