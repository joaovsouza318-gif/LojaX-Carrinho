import { Component, signal } from '@angular/core';
import { PessoaService } from '../../service/pessoa/pessoa-service';
import { Pessoa } from '../../models/pessoa';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-listar-pessoas',
  styleUrl: './listar-pessoas.css',
  templateUrl: './listar-pessoas.html',
})
export class ListarPessoas {
  //DECLARAÇÃO ARRAY DO TIPO PESSOA
  listarPessoas = signal<Pessoa[]>([])

  constructor(private router:Router, private pessoaService: PessoaService){}


  ngOnInit(){
    this.listaPessoas()
  }

  //Retorna a lista de todas as pessoas cadastradas
  listaPessoas(){
    this.pessoaService.listarPessoas()
      .subscribe({
        next: (dados) => {
          //this.listaAtletas = [...dados].sort((a, b) => a.nome.localeCompare(b.nome))
          this.listarPessoas.set([...dados].sort((a, b) => a.nome.localeCompare(b.nome)))
        },
        error: (msgErro) => {
          console.log("Erro ao listar  o atleta ", msgErro)
        }
    })
  }


  excluirPessoa(pessoa : Pessoa){
    if (confirm(`Deseja excluir ${pessoa.nome}? `)) {
      this.pessoaService.excluirPessoa(pessoa)
        .subscribe({
          next: (dados) => {
            this.listarPessoas.update(elem =>
              elem.filter(a => a.idpessoa !== pessoa.idpessoa)
            );

            console.log('Atleta excluído com Sucesso ', dados)
          },
          error: (msgErro) => {
            console.log("Erro ao Excluir  o atleta ", msgErro)
          }
        })

    }

    this.ngOnInit()
  }


  //ALTERAR DADOS
  buscarPessoas(pessoa: Pessoa) {
    this.router.navigate(['/cadastrar', pessoa.idpessoa])
  }

  calcIdade(data_nascimento: string) {
    return this.pessoaService.calcularIdade(data_nascimento)
  }

}
