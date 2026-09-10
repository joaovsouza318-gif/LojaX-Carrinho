// Local sugerido: src/app/service/pedido/pedido-service.ts
//
// Consome os endpoints observados em pedido_route.py e
// pedidoproduto_route.py (prefixo comum "/pedidos").

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  PedidoCreate,
  PedidoUpdate,
  PedidoResponse,
  PedidoDetalhadoResponse,
  PedidoProdutoCreate,
  PedidoProdutoResponse
} from '../../models/pedido';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {

  // URL confirmada pelo Swagger (http://127.0.0.1:8000/docs). Se o
  // projeto já tiver um arquivo de environment (environment.ts),
  // prefira usar environment.apiUrl no lugar desta constante.
  private apiUrl = 'http://127.0.0.1:8000/pedidos';

  constructor(private http: HttpClient) {}


  criar(dados: PedidoCreate): Observable<PedidoResponse> {
    return this.http.post<PedidoResponse>(`${this.apiUrl}/`, dados);
  }


  listar(): Observable<PedidoResponse[]> {
    return this.http.get<PedidoResponse[]>(`${this.apiUrl}/`);
  }


  buscarPorId(idpedido: number): Observable<PedidoResponse> {
    return this.http.get<PedidoResponse>(`${this.apiUrl}/${idpedido}`);
  }


  buscarDetalhado(idpedido: number): Observable<PedidoDetalhadoResponse> {
    return this.http.get<PedidoDetalhadoResponse>(
      `${this.apiUrl}/${idpedido}/detalhado`
    );
  }


  atualizar(idpedido: number, dados: PedidoUpdate): Observable<PedidoResponse> {
    return this.http.put<PedidoResponse>(`${this.apiUrl}/${idpedido}`, dados);
  }


  remover(idpedido: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${idpedido}`);
  }


  adicionarProdutos(
    idpedido: number,
    produtos: PedidoProdutoCreate[]
  ): Observable<PedidoProdutoResponse[]> {

    return this.http.post<PedidoProdutoResponse[]>(
      `${this.apiUrl}/${idpedido}/produtos`,
      produtos
    );
  }


  listarProdutos(idpedido: number): Observable<PedidoProdutoResponse[]> {
    return this.http.get<PedidoProdutoResponse[]>(
      `${this.apiUrl}/${idpedido}/produtos`
    );
  }


  removerProduto(idpedido: number, idproduto: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${idpedido}/produtos/${idproduto}`
    );
  }
}
