import { Injectable } from '@angular/core';
import { Produto } from '../../models/produto';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private itens: Produto[] = [];

  adicionar(produto: Produto): void {
    this.itens.push(produto);
  }

  remover(produto: Produto): void {
    const index = this.itens.indexOf(produto);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }

  listar(): Produto[] {
    return this.itens;
  }

  limpar(): void {
    this.itens = [];
  }

  total(): number {
    return this.itens.reduce((soma, item) => soma + item.valor_unitario, 0);
  }
}
