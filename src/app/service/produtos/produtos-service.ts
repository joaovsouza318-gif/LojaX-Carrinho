import { Injectable } from '@angular/core';
import { Produto } from '../../models/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {

  constructor(private http: HttpClient) {}

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/`);
  }

  buscarPorId(idproduto: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${idproduto}`);
  }
}

  // Dados mockados por enquanto. Quando a API estiver pronta,
  // troque o método listar() para buscar via HttpClient, ex:
  //
  // constructor(private http: HttpClient) {}
  // listar() {
  //   return this.http.get<Produto[]>('http://localhost:PORTA/api/produtos');
  // }

/*  private produtos: Produto[] = [
    {
      idproduto: 1,
      idsetor: 1,
      produto: 'Bulbasaur',
      descricao_produto: 'Pokémon tipo Planta',
      valor_unitario: 10.0,
      unidade: 1,
      estoque: 10,
      imagem: 'bulbasaur.jpg',
    },
    {
      idproduto: 2,
      idsetor: 1,
      produto: 'Charmander',
      descricao_produto: 'Pokémon tipo Fogo',
      valor_unitario: 12.0,
      unidade: 1,
      estoque: 10,
      imagem: 'charmander.jpg',
    },
    {
      idproduto: 3,
      idsetor: 1,
      produto: 'Squirtle',
      descricao_produto: 'Pokémon tipo Água',
      valor_unitario: 12.0,
      unidade: 1,
      estoque: 10,
      imagem: 'squirtle.jpg',
    },
    {
      idproduto: 4,
      idsetor: 1,
      produto: 'Pikachu',
      descricao_produto: 'Pokémon tipo Elétrico',
      valor_unitario: 15.0,
      unidade: 1,
      estoque: 10,
      imagem: 'pikachu.jpg',
    },
    {
      idproduto: 5,
      idsetor: 1,
      produto: 'Rapidash',
      descricao_produto: 'Pokémon tipo Fogo',
      valor_unitario: 18.0,
      unidade: 1,
      estoque: 10,
      imagem: 'rapidash.jpg',
    },
    {
      idproduto: 6,
      idsetor: 1,
      produto: 'Gyarados',
      descricao_produto: 'Pokémon tipo Água',
      valor_unitario: 25.0,
      unidade: 1,
      estoque: 10,
      imagem: 'gyarados.jpg',
    },
    {
      idproduto: 7,
      idsetor: 1,
      produto: 'Scyther',
      descricao_produto: 'Pokémon tipo Planta',
      valor_unitario: 20.0,
      unidade: 1,
      estoque: 10,
      imagem: 'scyther.jpg',
    },
    {
      idproduto: 8,
      idsetor: 1,
      produto: 'Electabuzz',
      descricao_produto: 'Pokémon tipo Elétrico',
      valor_unitario: 20.0,
      unidade: 1,
      estoque: 10,
      imagem: 'electabuzz.jpg',
    },
    {
      idproduto: 9,
      idsetor: 1,
      produto: 'Hunter',
      descricao_produto: 'Pokémon tipo Psíquico',
      valor_unitario: 16.0,
      unidade: 1,
      estoque: 10,
      imagem: 'hunter.jpg',
    },
    {
      idproduto: 10,
      idsetor: 1,
      produto: 'Gengar',
      descricao_produto: 'Pokémon tipo Psíquico',
      valor_unitario: 30.0,
      unidade: 1,
      estoque: 10,
      imagem: 'gengar.jpg',
    },
  ];

  listar(): Produto[] {
    return this.produtos;
  }
}
*/

