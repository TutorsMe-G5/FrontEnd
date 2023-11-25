import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./start/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {ReviewsPageComponent} from "./rate/pages/reviews-page/reviews-page.component";
import {PerfilPageComponent} from "./perfil/pages/perfil-page/perfil-page.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'rating', component: ReviewsPageComponent},
  {path: 'perfil', component: PerfilPageComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
