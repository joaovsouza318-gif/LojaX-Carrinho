import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import {
  CarrinhoService,
  ItemCarrinho
} from '../service/carrinho/carrinho-service';

import { PedidoService } from '../service/pedido/pedido-service';
import { PedidoCreate, PedidoProdutoCreate } from '../models/pedido';

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

  processando = false;

  // TODO(login): remover este valor fixo assim que o time de login
  // terminar a autenticação. Por enquanto, usamos um idpessoa fixo
  // só para testar a integração com o backend, sem depender de login.
  // Troque para um idpessoa que já exista na tabela "pessoa" do seu banco.
  private readonly idpessoaTeste = 1;


  constructor(
    private carrinhoService: CarrinhoService,
    private pedidoService: PedidoService,
    private router: Router
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


  finalizarCompra(): void {

    if (this.processando || this.itens.length === 0) {
      return;
    }

    this.processando = true;

    const dadosPedido: PedidoCreate = {
      idpessoa: this.idpessoaTeste,
      data_pedido: this.dataDeHoje(),
      status_pedido: 'P'
    };

    this.pedidoService.criar(dadosPedido).pipe(
      switchMap(pedido => {

        const produtos: PedidoProdutoCreate[] = this.itens.map(item => ({
          idpedido: pedido.idpedido,
          idproduto: item.produto.idproduto,
          quantidade: item.quantidade,
          valor_unitario: item.produto.valor_unitario
        }));

        return this.pedidoService.adicionarProdutos(
          pedido.idpedido,
          produtos
        );
      })
    ).subscribe({

      next: () => {
        this.processando = false;
        this.carrinhoService.limpar();
        window.alert('Pedido realizado com sucesso!');
        this.router.navigateByUrl('/home');
      },

      error: (erro) => {
        this.processando = false;

        const mensagem = erro?.error?.detail
          || 'Não foi possível finalizar a compra. Tente novamente.';

        window.alert(mensagem);
      }
    });
  }


  private dataDeHoje(): string {
    return new Date().toISOString().split('T')[0];
  }

}
