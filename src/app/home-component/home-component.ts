import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Produto } from '../models/produto';
import { ProdutosService } from '../service/produtos/produtos-service';
import { CarrinhoService } from '../service/carrinho/carrinho-service';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-home-component',
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(
    private produtosService: ProdutosService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    this.produtos = this.produtosService.listar();
  }

  get quantidadeItens(): number {
    return this.carrinhoService.quantidadeTotal();
  }

  adicionarAoCarrinho(produto: Produto): void {
    this.carrinhoService.adicionar(produto);
  }
}