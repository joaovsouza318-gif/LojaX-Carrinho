import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Produto } from '../models/produto';
import { ProdutosService } from '../service/produtos/produtos-service';
import { CarrinhoService } from '../service/carrinho/carrinho-service';

@Component({
  selector: 'app-listaprodutos',
  imports: [RouterLink],
  templateUrl: './listaprodutos.html',
  styleUrl: './listaprodutos.css',
})
export class Listaprodutos implements OnInit {

  produtos = signal<Produto[]>([]);

  constructor(
    private produtosService: ProdutosService,
    private carrinhoService: CarrinhoService
  ) {}


  ngOnInit(): void {

    this.produtosService.listar().subscribe({

      next: (produtos: Produto[]) => {
        console.log('Produtos carregados:', produtos);

        this.produtos.set(produtos);
      },

      error: (erro: unknown) => {
        console.error(
          'Erro ao carregar produtos:',
          erro
        );
      }

    });

  }


  get quantidadeItens(): number {
    return this.carrinhoService.quantidadeTotal();
  }


  adicionarAoCarrinho(produto: Produto): void {
    this.carrinhoService.adicionar(produto);
  }


  formatarPreco(valor: number | string): string {
    return Number(valor).toFixed(2);
  }


  imagemProduto(produto: Produto): string {

    const imagens: Record<number, string> = {
      1: 'bulbasaur.jpg',
      2: 'charmander.jpg',
      3: 'squirtle.jpg',
      4: 'pikachu.jpg',
      5: 'rapidash.jpg',
      6: 'gyarados.jpg',
      7: 'scyther.jpg',
      8: 'electabuzz.jpg',
      9: 'hunter.jpg',
      10: 'gengar.jpg'
    };

    const imagem =
      produto.imagem ||
      imagens[produto.idproduto] ||
      'bulbasaur.jpg';

    return 'img/products/' + imagem;
  }

}
