import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'Editor',
  standalone: true,
  imports: [InputTextareaModule, ReactiveFormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css',
})
export class EditorComponent {
  text = new FormControl(
    '# --> Here preview <--\n\n## Titulo 2\n\n-Bullet 1\n-Bullet2'
  );

  public showText() {
    console.log(this.text.value);
  }
}
