import { Component } from '@angular/core';
import { EditorComponent } from "../../shared/components/editor/editor.component";

@Component({
    selector: 'app-readme-generator',
    standalone: true,
    templateUrl: './readme-generator.component.html',
    styleUrl: './readme-generator.component.css',
    imports: [EditorComponent]
})
export class ReadmeGeneratorComponent {

}
