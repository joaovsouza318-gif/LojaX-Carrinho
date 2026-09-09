import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  CarrinhoService,
  ItemCarrinho
} from '../service/carrinho/carrinho-service';

@Component({
  imports: [
    CommonModule,
    RouterLink
  ],

  selector: 'app-carrinho',

  styleUrl: './carrinho.css',

  templateUrl: './carrinho.html',
})
export class Carrinho {

  frete = 19.90;

  desconto = 0;


  constructor(
    private carrinhoService: CarrinhoService
  ) {}


  get itens(): ItemCarrinho[] {
    return this.carrinhoService.listar();
  }


  get quantidadeItens(): number {
    return this.carrinhoService.quantidadeTotal();
  }


  get subtotal(): number {
    return this.carrinhoService.total();
  }


  get valorFrete(): number {

    if (this.itens.length === 0) {
      return 0;
    }

    return this.frete;
  }


  get total(): number {

    return (
      this.subtotal +
      this.valorFrete -
      this.desconto
    );
  }


  aumentar(item: ItemCarrinho): void {
    this.carrinhoService.aumentar(item.produto);
  }


  diminuir(item: ItemCarrinho): void {
    this.carrinhoService.diminuir(item.produto);
  }


  remover(item: ItemCarrinho): void {
    this.carrinhoService.remover(item.produto);
  }


  limparCarrinho(): void {
    this.carrinhoService.limpar();
  }

}
