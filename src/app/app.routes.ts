import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'a1',
    loadComponent: () =>
      import('./../articles/kafka-part-1-basics/kafka-part-1-basics.component').then(
        (c) => c.KafkaPart1BasicsComponent
      ),
  },
  {
    path: 'a2',
    loadComponent: () =>
      import('./../articles/kafka-part-2-basics/kafka-part-2-basics.component').then(
        (c) => c.KafkaPart2BasicsComponent
      ),
  },
  {
    path: '',
    redirectTo: '/a1',
    pathMatch: 'full',
  },
];
