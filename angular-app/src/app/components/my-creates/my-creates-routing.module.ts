import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifyFormComponent } from './modify-form/modify-form.component';
import { MyCreatesComponent } from './my-creates.component';

const routes: Routes = [
  { path:'', component: MyCreatesComponent },
  { path:':pokemonId', component: ModifyFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCreatesRoutingModule { }
