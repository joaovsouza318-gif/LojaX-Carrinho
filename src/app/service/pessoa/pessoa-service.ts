import { HttpClient, httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../../models/pessoa';
import { Observable } from 'rxjs';

@Injectable()
export class PessoaService {
    constructor (private http: HttpClient) {}

    cadastrar(pessoa: Pessoa): Observable<Pessoa> {
        const urlApi = `http://127.0.0.1:8000/pessoa/`
    
        return this.http.post<Pessoa>(urlApi, pessoa)
    }

    listarPessoas(): Observable<Pessoa[]>{
        const urlApi = `http://127.0.0.1:8000/pessoa/`

        return this.http.get<Pessoa[]>(urlApi)
    }

    listarPessoa(pessoaId: number): Observable<Pessoa>{
        const urlApi = `http://127.0.0.1:8000/pessoa/${pessoaId}`

        return this.http.get<Pessoa>(urlApi)
    }

    excluirPessoa(pessoa: Pessoa): Observable<Pessoa>{
        const urlApi = `http://127.0.0.1:8000/pessoa/${pessoa.idpessoa}`

        return this.http.delete<Pessoa>(urlApi)
    }

    alterarPessoa(pessoa: Pessoa): Observable<Pessoa>{
        const urlApi = `http://127.0.0.1:8000/pessoa/${pessoa.idpessoa}`

        return this.http.put<Pessoa>(urlApi, pessoa)
    }
}
