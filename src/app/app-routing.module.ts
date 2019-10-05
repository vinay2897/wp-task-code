import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentStoreComponent } from './content-store/content-store.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path:'home', component: ContentStoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
