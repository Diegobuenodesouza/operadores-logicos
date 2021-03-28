import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-or',
  templateUrl: './operador-or.component.html',
  styleUrls: ['./operador-or.component.css']
})
export class OperadorOrComponent implements OnInit {

  botao1 : Boolean = false;
  botao2 : Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  alterarbtn2(){
    this.botao2 = !this.botao2;
  }

  alterarbtn1(){
    this.botao1 = !this.botao1;
  }

}
