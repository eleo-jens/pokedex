import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePokeComponent } from './components/liste-poke/liste-poke.component';

const routes: Routes = [
  { path: "Liste", component: ListePokeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
