import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-and',
  templateUrl: './operador-and.component.html',
  styleUrls: ['./operador-and.component.css']
})
export class OperadorAndComponent implements OnInit {

  botao1 = false;
  botao2 = false;
  

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
