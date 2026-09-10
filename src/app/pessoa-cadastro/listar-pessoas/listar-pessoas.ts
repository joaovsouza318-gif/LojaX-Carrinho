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
  // Signal com o array de pessoas exibido na tela
  listarPessoas = signal<Pessoa[]>([])

  constructor(private router:Router, private pessoaService: PessoaService){}

  // Executa automaticamente quando o componente é carregado
  ngOnInit(){
    this.listaPessoas()
  }

   // Busca todas as pessoas no backend e ordena por nome
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

 // Pede confirmação e exclui a pessoa; se cancelar, não faz nada
  excluirPessoa(pessoa: Pessoa) {
    if (!confirm(`Deseja excluir ${pessoa.nome}?`)) {
      return
    }

    this.pessoaService.excluirPessoa(pessoa)
      .subscribe({
        next: (dados) => {
          this.listarPessoas.update(elem =>
            elem.filter(a => a.idpessoa !== pessoa.idpessoa)
          );
          console.log('Pessoa excluída com sucesso: ', dados)
        },
        error: (msgErro) => {
          console.log("Erro ao excluir a pessoa: ", msgErro)
        }
      })
  }


  // Navega para a tela de cadastro/edição, passando o id da pessoa
  buscarPessoas(pessoa: Pessoa) {
    this.router.navigate(['/cadastrar', pessoa.idpessoa])
  }

    // Calcula a idade a partir da data de nascimento (delega pro service)
  calcIdade(data_nascimento: string) {
    return this.pessoaService.calcularIdade(data_nascimento)
  }

}
