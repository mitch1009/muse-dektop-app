import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home-routing.module').then((home) => home.HomeRoutingModule)
  },
  {
    path: 'auth', loadChildren: () => import('./Authenticate/authenticate-routing.module').then((auth) => auth.AuthenticateRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
