import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./pages/home/home');
      return m.Home;
    },
  },
  {
    path: 'routines',
    loadComponent: async () => {
      const m = await import('./pages/routines/routines');
      return m.RoutineManagement;
    },
  },
];
