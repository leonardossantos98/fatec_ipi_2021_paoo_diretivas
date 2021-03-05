import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pessoas = [];

  onAdicionarPessoa(pessoa){
    this.pessoas = [pessoa, ...this.pessoas];
  }

  //textoBotao = "Esconder";
  //esconder = false;

  //alterarExibicao(){
  //  this.esconder = !this.esconder;
  //  this.textoBotao = this.esconder ? "Exibir" : "Esconder";
  //}
}
