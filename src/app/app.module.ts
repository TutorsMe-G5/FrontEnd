import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterContentComponent } from './public/pages/footer-content/footer-content.component';
import { HomeComponent } from './public/pages/home/home.component';
import { NavBarComponent } from './public/pages/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReviewsPageComponent } from './rate/pages/reviews-page/reviews-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    HomeComponent,
    NavBarComponent,
    PageNotFoundComponent,
    ReviewsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
