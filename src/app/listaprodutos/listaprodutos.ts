import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { ProdutosService } from '../service/produtos/produtos-service';

@Component({
  imports: [],
  selector: 'app-listaprodutos',
  styleUrl: './listaprodutos.css',
  templateUrl: './listaprodutos.html',
})
export class Listaprodutos implements OnInit {
 
  produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.produtos = this.produtosService.listar()
    }
  }

