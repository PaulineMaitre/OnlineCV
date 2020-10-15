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
import {MatSliderModule} from '@angular/material/slider';
import { MainListComponent } from './back-office/main-list/main-list.component';
import { SideListComponent } from './back-office/side-list/side-list.component';
import { EditComponent } from './back-office/edit/edit.component';
import { FrameItemFormComponent } from './back-office/frame-item-form/frame-item-form.component';
import { FrameContentFormComponent } from './back-office/frame-content-form/frame-content-form.component';
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    FrontOfficeComponent,
    BackOfficeComponent,
    MainListComponent,
    NavComponent,
    MainListComponent,
    SideListComponent,
    EditComponent,
    FrameItemFormComponent,
    FrameContentFormComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        DragDropModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatDividerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
