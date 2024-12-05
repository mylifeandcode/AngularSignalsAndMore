import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./start/start.component').then(c => c.StartComponent)
  },
  {
    path: 'start',
    loadComponent: () => import('./start/start.component').then(c => c.StartComponent)
  },    
  {
    path: 'inject',
    loadComponent: () => import('./inject-based-di/inject-based-di.component').then(c => c.InjectBasedDIComponent)
  },
  {
    path: 'on-push',
    loadComponent: () => import('./on-push/on-push.component').then(c => c.OnPushComponent)
  },
  {
    path: 'image-optimization',
    loadComponent: () => import('./image-optimization/image-optimization.component').then(c => c.ImageOptimizationComponent)
  },
  {
    path: 'signals-intro',
    loadComponent: () => import('./signals-intro/signals-intro.component').then(c => c.SignalsIntroComponent)
  },
  {
    path: 'signals-with-on-push',
    loadComponent: () => import('./signals-with-on-push/signals-with-on-push.component').then(c => c.SignalsWithOnPushComponent)
  },  
  {
    path: 'signal-inputs',
    loadComponent: () => import('./signal-inputs/signal-inputs.component').then(c => c.SignalInputsComponent)
  },  
  {
    path: '**',
    redirectTo: ''
  }  
];
