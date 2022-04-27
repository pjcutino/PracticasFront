import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"", //lazy load
    loadChildren: () => import('./components/home/home.module').then(mod => mod.HomeModule),
    //cargar modulos correspondientes
  },
  {
    path:"list", //lazy load
    loadChildren: () => import('./components/list/list.module').then(mod => mod.ListModule),
  },
  {
    path:"home", //lazy load
    loadChildren: () => import('./components/home/home.module').then(mod => mod.HomeModule),
  },
  {
    path:"detail", //lazy load
    loadChildren: () => import('./components/detail/detail.module').then(mod => mod.DetailModule),
  },
  {
    path:"forms", //lazy load
    loadChildren: () => import('./components/forms/forms.module').then(mod => mod.FormsCModule),
  },
  {
    path:"my-creates", //lazy load
    loadChildren: () => import('./components/my-creates/my-creates.module').then(mod => mod.MyCreatesModule),
  },
  {
    path:"about", //lazy load
    loadChildren: () => import('./components/about/about.module').then(mod => mod.AboutModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
