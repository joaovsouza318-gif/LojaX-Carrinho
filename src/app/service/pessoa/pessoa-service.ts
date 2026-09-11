import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../../models/pessoa';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PessoaService {
    constructor (private http: HttpClient) {}

    cadastrar(pessoa: Pessoa): Observable<Pessoa> {
        const urlApi = `http://127.0.0.1:8000/pessoas/`
    
        return this.http.post<Pessoa>(urlApi, pessoa)
    }

    listarPessoas(): Observable<Pessoa[]>{
        const urlApi = `http://127.0.0.1:8000/pessoas/`

        return this.http.get<Pessoa[]>(urlApi)
    }

    listarPessoa(pessoaId: number): Observable<Pessoa>{
        const urlApi = `http://127.0.0.1:8000/pessoas/${pessoaId}`

        return this.http.get<Pessoa>(urlApi)
    }

    excluirPessoa(pessoa: Pessoa): Observable<Pessoa>{
        const urlApi = `http://127.0.0.1:8000/pessoas/${pessoa.idpessoa}`

        return this.http.delete<Pessoa>(urlApi)
    }

    alterarPessoa(pessoa: Pessoa): Observable<Pessoa>{
        const urlApi = `http://127.0.0.1:8000/pessoas/${pessoa.idpessoa}`

        return this.http.put<Pessoa>(urlApi, pessoa)
    }

    calcularIdade(data_nascimento: string): number {
        const dt_nascimento = new Date(data_nascimento + "T00:00:00")
        const hoje = new Date()
    
        let idade = hoje.getFullYear() - dt_nascimento.getFullYear()
        const resp_calc_mes = hoje.getMonth() - dt_nascimento.getMonth()
    
        if (resp_calc_mes < 0 || (resp_calc_mes === 0 && hoje.getDate() < dt_nascimento.getDate())) {
          idade--
        }
    
        return idade
      }
}
