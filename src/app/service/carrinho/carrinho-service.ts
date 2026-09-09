import { Injectable } from '@angular/core';
import { Produto } from '../../models/produto';

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {

  private itens: ItemCarrinho[] = [];

  adicionar(produto: Produto): void {

    const itemExistente = this.itens.find(
      item => item.produto.idproduto === produto.idproduto
    );

    if (itemExistente) {

      if (itemExistente.quantidade < produto.estoque) {
        itemExistente.quantidade++;
      }

    } else {

      this.itens.push({
        produto: produto,
        quantidade: 1
      });

    }
  }


  aumentar(produto: Produto): void {

    const item = this.itens.find(
      item => item.produto.idproduto === produto.idproduto
    );

    if (item && item.quantidade < produto.estoque) {
      item.quantidade++;
    }
  }


  diminuir(produto: Produto): void {

    const item = this.itens.find(
      item => item.produto.idproduto === produto.idproduto
    );

    if (!item) {
      return;
    }

    if (item.quantidade > 1) {
      item.quantidade--;
    } else {
      this.remover(produto);
    }
  }


  remover(produto: Produto): void {

    this.itens = this.itens.filter(
      item => item.produto.idproduto !== produto.idproduto
    );
  }


  listar(): ItemCarrinho[] {
    return this.itens;
  }


  quantidadeTotal(): number {

    return this.itens.reduce(
      (total, item) => total + item.quantidade,
      0
    );
  }


  total(): number {

    return this.itens.reduce(
      (total, item) =>
        total +
        (item.produto.valor_unitario * item.quantidade),
      0
    );
  }


  limpar(): void {
    this.itens = [];
  }

}
