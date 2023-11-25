import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  title = 'TutorsMe';
  options = [
    {path: '/home', title: 'Home'},
    {path: '/students', title: 'Your students!'},
    {path: '/rating', title: 'Rating'},
    {path: '/perfil', title: 'Perfil'}
  ]
}
