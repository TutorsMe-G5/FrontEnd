import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterContentComponent } from './public/pages/footer-content/footer-content.component';
import { HomeComponent } from './start/pages/home/home.component';
import { NavBarComponent } from './start/pages/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { ReviewsPageComponent } from './rate/pages/reviews-page/reviews-page.component';
import { StarRatingComponent } from './rate/component/star-rating/star-rating.component';
import { PerfilPageComponent } from './perfil/pages/perfil-page/perfil-page.component';
import { LoginComponent } from './public/pages/login/login.component';
import { SignInComponent } from './public/pages/sign-in/sign-in.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    HomeComponent,
    NavBarComponent,
    PageNotFoundComponent,
    ReviewsPageComponent,
    StarRatingComponent,
    PerfilPageComponent,
    LoginComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
