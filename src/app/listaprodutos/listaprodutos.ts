import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Produto } from '../models/produto';
import { ProdutosService } from '../service/produtos/produtos-service';
import { CarrinhoService } from '../service/carrinho/carrinho-service';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-listaprodutos',
  styleUrl: './listaprodutos.css',
  templateUrl: './listaprodutos.html',
})
export class Listaprodutos implements OnInit {
  produtos: Produto[] = [];

  constructor(
    private produtosService: ProdutosService,
    private carrinhoService: CarrinhoService,
  ) {}

  ngOnInit(): void {
    this.produtosService.listar().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
      },
      error: (erro) => {
        console.error('Erro ao carregar produtos:', erro);
      },
    });
  }

  get quantidadeItens(): number {
    return this.carrinhoService.quantidadeTotal();
  }

  adicionarAoCarrinho(produto: Produto): void {
    this.carrinhoService.adicionar(produto);
  }
}
//o professor quer tambem que tenha um banco de dados no mysql, que mostre os produtos e seções no fastAPI