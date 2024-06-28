import { Component } from '@angular/core';
import { EditorComponent } from "../../shared/components/editor/editor.component";
import { PreviewComponent } from "../../shared/components/preview/preview.component";

@Component({
    selector: 'app-readme-generator',
    standalone: true,
    templateUrl: './readme-generator.component.html',
    styleUrl: './readme-generator.component.css',
    imports: [EditorComponent, PreviewComponent]
})
export class ReadmeGeneratorComponent {

}
