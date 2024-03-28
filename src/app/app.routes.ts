import { Routes } from '@angular/router';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';
import { LandingComponent } from './domains/landing/pages/landing/landing.component';
import { ReadmeEditorComponent } from './domains/readme-editor/pages/readme-editor/readme-editor.component';
import { GalleryComponent } from './domains/gallery/pages/gallery/gallery.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LandingComponent,
      },
      {
        path: 'generate',
        component: ReadmeEditorComponent,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
      },
    ],
  },
];
