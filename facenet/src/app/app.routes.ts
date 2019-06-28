import { Routes, RouterModule, Router} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { ThingsComponent } from './things/things.component';

const rutas: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: UserListComponent },
  {path:'things',component:ThingsComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);
