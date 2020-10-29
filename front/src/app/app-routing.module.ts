import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BackOfficeComponent} from './back-office/back-office.component';
import {AppComponent} from './app.component';
import {FrontOfficeComponent} from './front-office/front-office.component';
import {MainListComponent} from './back-office/edit/main-list/main-list.component';
import {EditComponent} from './back-office/edit/edit.component';
import {HomeComponent} from './home/home.component';


// TODO : Ajouter les routes Front/autre
const routes: Routes = [
  {path: 'back', component: BackOfficeComponent},
  {path: 'back/edit', component: EditComponent},
  {path: '', component: HomeComponent},
  {path: ':id', component: FrontOfficeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
