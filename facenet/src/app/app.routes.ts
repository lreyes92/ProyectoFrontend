import { Routes, RouterModule, Router} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { ThingsComponent } from './things/things.component';
import { MyfriendsComponent } from './myfriends/myfriends.component';

const rutas: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: UserListComponent },
  {path:'things',component:ThingsComponent},
  {path:'friends',component:MyfriendsComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);
