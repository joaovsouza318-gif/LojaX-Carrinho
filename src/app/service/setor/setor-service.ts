
import { Setor } from "../../models/setor";

export class SetorService {

  private setores: Setor[] = [
    {
      idsetor: 1,
      setor: 'Fogo',
      descricao_setor: 'Pokémon do tipo Fogo'
    },
    {
      idsetor: 2,
      setor: 'Água',
      descricao_setor: 'Pokémon do tipo Água'
    },
    {
      idsetor: 3,
      setor: 'Planta',
      descricao_setor: 'Pokémon do tipo Planta'
    },
    {
      idsetor: 4,
      setor: 'Elétrico',
      descricao_setor: 'Pokémon do tipo Elétrico'
    },
    {
      idsetor: 5,
      setor: 'Fantasma',
      descricao_setor: 'Pokémon do tipo Fantasma'
    }
  ];

  listar(): Setor[] {
    return this.setores;
  }

  adicionar(setor: Setor): void {
    const novoId = this.setores.length > 0
      ? Math.max(...this.setores.map(s => s.idsetor)) + 1
      : 1;

    setor.idsetor = novoId;

    this.setores.push(setor);
  }

  localizar(id: number): Setor | undefined {
    return this.setores.find(
      s => s.idsetor === id
    );
  }

  alterar(setorAlterado: Setor): void {
    const indice = this.setores.findIndex(
      s => s.idsetor === setorAlterado.idsetor
    );

    if (indice !== -1) {
      this.setores[indice] = setorAlterado;
    }
  }

  excluir(id: number): void {
    const indice = this.setores.findIndex(
      s => s.idsetor === id
    );

    if (indice !== -1) {
      this.setores.splice(indice, 1);
    }
  }
}