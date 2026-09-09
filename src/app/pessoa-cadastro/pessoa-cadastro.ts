import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-pessoa-cadastro',
  styleUrl: './pessoa-cadastro.css',
  templateUrl: './pessoa-cadastro.html',
})
export class PessoaCadastro {
  idpessoa = 0
  nome = ''
  cpf = ''
  data_nascimento = ''
  sexo = ''
  telefone = ''
  email = ''
  senha = ''

  exibeDados(){
    console.log(this.idpessoa, this.nome, this.cpf, this.data_nascimento, this.sexo, this.telefone, this.email, this.senha);

    this.limparCampos();
  }

  limparCampos(){
    this.nome = ''
    this.cpf = ''
    this.data_nascimento = ''
    this.sexo = ''
    this.telefone = ''
    this.email = '',
    this.senha = ''
  }
}
