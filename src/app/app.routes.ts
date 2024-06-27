import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/pages/readme-generator/readme-generator.component').then(
        (m) => m.ReadmeGeneratorComponent
      ),
  },
];
