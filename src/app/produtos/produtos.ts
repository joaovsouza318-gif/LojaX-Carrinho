import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  imports: [FormsModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {

  idproduto = 0;
  idsetor = 0;
  produto = '';
  descricao_produto = '';
  valor_unitario = 0;
  unidade = 0;
  estoque = 0;

  
}
