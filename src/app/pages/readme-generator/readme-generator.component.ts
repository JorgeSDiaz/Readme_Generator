import { Component } from '@angular/core';
import { EditorComponent } from '../../shared/components/editor/editor.component';
import { PreviewComponent } from '../../shared/components/preview/preview.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ButtonGroupModule } from 'primeng/buttongroup';

@Component({
  selector: 'app-readme-generator',
  standalone: true,
  templateUrl: './readme-generator.component.html',
  styleUrl: './readme-generator.component.css',
  imports: [
    EditorComponent,
    PreviewComponent,
    SidebarModule,
    ButtonModule,
    DividerModule,
    ButtonGroupModule
  ],
})
export class ReadmeGeneratorComponent {
  sidebarVisible: boolean = false;
}
