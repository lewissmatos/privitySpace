import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/components/home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard/home'},
  {path: 'dashboard/home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
