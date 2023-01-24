import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { ListePokeComponent } from './components/liste-poke/liste-poke.component';

const routes: Routes = [
  { path: "Liste", component: ListePokeComponent }, 
  {
    path: "Detail/:id", component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
