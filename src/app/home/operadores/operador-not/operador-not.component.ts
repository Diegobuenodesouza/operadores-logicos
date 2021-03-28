import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-not',
  templateUrl: './operador-not.component.html',
  styleUrls: ['./operador-not.component.css']
})
export class OperadorNotComponent implements OnInit {

  botao1: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  alterarbtn(){
    this.botao1 = !this.botao1;
  }

}
