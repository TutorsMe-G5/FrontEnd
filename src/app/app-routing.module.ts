import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {ReviewsPageComponent} from "./rate/pages/reviews-page/reviews-page.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'rating', component: ReviewsPageComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
