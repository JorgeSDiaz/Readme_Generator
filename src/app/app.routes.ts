import { Routes } from '@angular/router';
import LayoutComponent from '@shared/components/layout/layout.component';
import LandingComponent from './domains/landing/pages/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('@landing/pages/landing/landing.component')
      },
      {
        path: 'generate',
        loadComponent: () => import('@readmeEditor/pages/readme-editor/readme-editor.component')
      },
      {
        path: 'gallery',
        loadComponent: () => import('@gallery/pages/gallery/gallery.component')
      },
    ],
  },
];
