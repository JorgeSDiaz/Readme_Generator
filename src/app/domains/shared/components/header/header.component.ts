import { Component } from '@angular/core';

@Component({
  selector: 'HeaderComponent',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  options: String[] = ['Home', 'Generate', 'Gallery']
  logoSrc: String = '@assets/logo.svg';
}
