import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles/roles.component';

const routes: Routes = [
  {
    path: 'roles',
    component: RolesComponent,
  },
  {
    path: 'roles/:id',
    component: RolesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
