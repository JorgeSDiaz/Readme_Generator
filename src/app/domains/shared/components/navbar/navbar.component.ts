import { Component } from '@angular/core';

@Component({
  selector: 'NavBarComponent',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavBarComponent {
  options: String[] = ['Home', 'Generate', 'Gallery']
  logoSrc: String = '@assets/logo.svg';
}
