import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Produto } from '../../models/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {

  private readonly apiUrl = 'http://127.0.0.1:8000/produtos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/`);
  }

  buscarPorId(idproduto: number): Observable<Produto> {
    return this.http.get<Produto>(
      `${this.apiUrl}/${idproduto}`
    );
  }
}
