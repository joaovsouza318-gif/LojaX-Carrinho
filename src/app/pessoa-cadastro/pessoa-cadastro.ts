import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PessoaService } from '../service/pessoa/pessoa-service';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../models/pessoa';

@Component({
  imports: [FormsModule],
  selector: 'app-pessoa-cadastro',
  styleUrl: './pessoa-cadastro.css',
  templateUrl: './pessoa-cadastro.html',
})
export class PessoaCadastro {

  constructor(private cdr: ChangeDetectorRef, private pessoaService: PessoaService, private route: ActivatedRoute){}

  idpessoa = 0
  nome = ''
  cpf = ''
  data_nascimento = ''
  sexo = ''
  telefone = ''
  email = ''
  senha = ''

  editar = false
  pessoaId = 0

  exibeDados(){
    console.log(this.idpessoa, this.nome, this.cpf, this.data_nascimento, this.sexo, this.telefone, this.email);

    this.limparCampos();
  }

  limparCampos(){
    this.nome = ''
    this.cpf = ''
    this.data_nascimento = ''
    this.sexo = ''
    this.telefone = ''
    this.email = ''
    this.senha = ''
  }

  ngOnInit(){
    this.pessoaId = Number(this.route.snapshot.paramMap.get('idpessoa'))

    if (this.pessoaId > 0){
      this.editar = true
      this.carregaCampo(this.pessoaId)
    }
  }

  carregaCampo(pessoaId: number){
    this.pessoaService.listarPessoa(pessoaId)
      .subscribe({
        next: (objPessoa) => {
          this.idpessoa = objPessoa.idpessoa
          this.nome = objPessoa.nome
          this.cpf = objPessoa.cpf
          this.data_nascimento = objPessoa.data_nascimento
          this.sexo = objPessoa.sexo
          this.telefone = objPessoa.telefone
          this.email = objPessoa.email
          this.senha = objPessoa.senha

          this.cdr.detectChanges()
        }, error: (msgErro) => {
          console.log("Erro ao listar a pessoa", msgErro)
        }
      })
  }

  enviaDados(){
    const pessoaCadastra = new Pessoa()
    pessoaCadastra.nome = this.nome
    pessoaCadastra.cpf = this.cpf
    pessoaCadastra.data_nascimento = this.data_nascimento
    pessoaCadastra.sexo = this.sexo
    pessoaCadastra.telefone = this.telefone
    pessoaCadastra.email = this.email
    pessoaCadastra.senha = this.senha

    if(!this.editar){
      this.pessoaService.cadastrar(pessoaCadastra)
        .subscribe({
          next: (resposta) => {
            console.log(resposta)
          }, error: (msgErro) => {
            console.log("Erro ao cadastrar o atleta", msgErro)
          }
        })
    } else {
      pessoaCadastra.idpessoa = this.pessoaId

      this.pessoaService.alterarPessoa(pessoaCadastra)
        .subscribe({
          next: (resposta) => {
            console.log(pessoaCadastra)

            console.log(resposta)
          }, error: (msgErro) => {
            console.log("Erro ao alterar pessoa", msgErro)
          }
        })
    }

    this.limparCampos();
  }

  listarPessoa(pessoaId: number){
    this.pessoaService.listarPessoa(pessoaId)
      .subscribe({
        next: (dados) => {
          console.table(dados)
        }, error: (msgErro) => {
          console.log("Erro ao listar atletas", msgErro)
        }
      })
  }
}
