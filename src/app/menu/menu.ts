import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CarrinhoService } from '../service/carrinho/carrinho-service';

@Component({
  imports: [CommonModule, RouterLink, RouterLinkActive],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
})
export class Menu {

  constructor(private carrinhoService: CarrinhoService) {}

  get quantidadeItens(): number {
    return this.carrinhoService.quantidadeTotal();
  }
}