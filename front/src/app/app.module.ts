import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FrontOfficeComponent} from './front-office/front-office.component';
import {BackOfficeComponent} from './back-office/back-office.component';
import {NavComponent} from './nav/nav.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSliderModule} from '@angular/material/slider';
import { MainListComponent } from './back-office/edit/main-list/main-list.component';
import { SideListComponent } from './back-office/edit/side-list/side-list.component';
import { EditComponent } from './back-office/edit/edit.component';
import { AboutMeComponent } from './front-office/cv-content/side-bar-info/about-me/about-me.component';
import { CvHeaderComponent } from './front-office/cv-header/cv-header.component';
import { LanguagesComponent } from './front-office/cv-content/side-bar-info/languages/languages.component';
import { SkillsComponent } from './front-office/cv-content/side-bar-info/skills/skills.component';
import { FrameComponent } from './front-office/cv-content/frame/frame.component';
import { FrameItemComponent } from './front-office/cv-content/frame/frame-item/frame-item.component';
import { CvContentComponent } from './front-office/cv-content/cv-content.component';
import { SideBarInfoComponent } from './front-office/cv-content/side-bar-info/side-bar-info.component';
import { ContactMeComponent } from './front-office/contact-me/contact-me.component';
import {FrameContentFormComponent} from './back-office/edit/main-list/frame-content-form/frame-content-form.component';
import {FrameItemFormComponent} from './back-office/edit/main-list/frame-content-form/frame-item-form/frame-item-form.component';

import {MatDividerModule} from '@angular/material/divider';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HobbiesComponent } from './front-office/cv-content/side-bar-info/hobbies/hobbies.component';
import { OrderModule } from 'ngx-order-pipe';

import { MultiFormComponent } from './back-office/edit/side-list/multi-form/multi-form.component';
import { SideFormComponent } from './back-office/edit/side-list/multi-form/side-form/side-form.component';

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
    AboutMeComponent,
    CvHeaderComponent,
    LanguagesComponent,
    SkillsComponent,
    FrameComponent,
    FrameItemComponent,
    CvContentComponent,
    SideBarInfoComponent,
    ContactMeComponent,
    FrameContentFormComponent,
    FrameItemFormComponent,
    HomeComponent,
    HomeHeaderComponent,
    HobbiesComponent,
    MultiFormComponent,
    SideFormComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        DragDropModule,
        ReactiveFormsModule,
        MatSliderModule,
        FormsModule,
        MatDividerModule,
        OrderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
