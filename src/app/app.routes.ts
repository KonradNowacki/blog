import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'article1',
    loadComponent: () =>
      import('./../articles/kafka-part-1-basics/kafka-part-1-basics.component').then(
        (c) => c.KafkaPart1BasicsComponent
      ),
  },
  {
    path: 'article2',
    loadComponent: () =>
      import('./../articles/kafka-part-2-basics/kafka-part-2-basics.component').then(
        (c) => c.KafkaPart2BasicsComponent
      ),
  },
  {
    path: '',
    redirectTo: '/contact',
    pathMatch: 'full',
  },
];
