import { Component } from '@angular/core';
import { NavOption } from '../../models/nav-option.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'NavBarComponent',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export default class NavBarComponent {
  options: NavOption[] = [
    { name: 'Home', route: '/', icon: 'assets/home.svg' },
    { name: 'Generate', route: '/generate', icon: 'assets/edit.svg' },
    { name: 'Gallery', route: '/gallery', icon: 'assets/gallery.svg' },
  ];
}
