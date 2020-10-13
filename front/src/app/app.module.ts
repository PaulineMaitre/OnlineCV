import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FrontOfficeComponent} from './front-office/front-office.component';
import {BackOfficeComponent} from './back-office/back-office.component';
import {NavComponent} from './nav/nav.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BackViewComponent } from './back-view/back-view.component';
import {MatSliderModule} from '@angular/material/slider';
import { MainListComponent } from './back-office/main-list/main-list.component';
import { SideListComponent } from './back-office/side-list/side-list.component';
import { EditComponent } from './back-office/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontOfficeComponent,
    BackOfficeComponent,
    MainListComponent,
    NavComponent,
    BackViewComponent,
    MainListComponent,
    SideListComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    ReactiveFormsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
