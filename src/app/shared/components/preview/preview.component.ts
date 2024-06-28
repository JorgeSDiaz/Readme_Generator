import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'Preview',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css',
})
export class PreviewComponent {
  content: string[] = [
    '# --> Here preview <--',
    '## Titulo 2',
    '- Bullet 1',
    '- Bullet 2',
    '```javascript',
    "console.log('Hello World!');",
    '```',
  ];
  markdown: string = this.content.join('\n\n');
}
