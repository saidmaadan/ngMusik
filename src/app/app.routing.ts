import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FinderComponent } from './finder/finder.component';

const appRoutes: Routes = [
  {
    path: '',
    component:FinderComponent
  },
  {
    path: 'about',
    component:AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);