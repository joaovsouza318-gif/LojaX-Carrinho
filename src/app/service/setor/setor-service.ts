import { injectable } from '@angular/core';
import { Setor } from '../../models/setotr';

@injectable({
    providedIn: 'root'
})
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
}
{
    idsetor: 3,
    setor: 'Planta',
    descricao_setor: 'Pokémon do tipo Planta'
}
{
    idsetor: 4,
    setor: 'Elétrico',
    descricao_setor: 'Pokémon do tipo Elétrico'
}
{
    idsetor: 5,
    setor: 'Fantasma',
    descricao_setor: 'Pokémon do tipo Fantasma'
}
];

listar

}