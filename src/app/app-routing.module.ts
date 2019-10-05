import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentStoreComponent } from './content-store/content-store.component';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path:'home', component: ContentStoreComponent },
  { path:'nav-2', component: DummyComponent },
  { path:'nav-3', component: DummyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
