import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperadorAndComponent } from './home/operadores/operador-and/operador-and.component';
import { OperadorNotComponent } from './home/operadores/operador-not/operador-not.component';
import { OperadorOrComponent } from './home/operadores/operador-or/operador-or.component';

const routes: Routes = [
  {path : '' , component: OperadorAndComponent },
  {path : "and" , component : OperadorAndComponent},
  {path : "or" , component : OperadorOrComponent},
  {path : "not" , component : OperadorNotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
