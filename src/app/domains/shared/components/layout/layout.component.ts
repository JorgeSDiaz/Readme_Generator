import { Component } from '@angular/core';
import NavBarComponent from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {

}
