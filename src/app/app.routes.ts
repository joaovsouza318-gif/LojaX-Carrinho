import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { PessoaCadastro } from './pessoa-cadastro/pessoa-cadastro';
import { Carrinho } from './carrinho/carrinho';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "cadastrar",
        component: PessoaCadastro
    },
    {
        path: "carrinho",
        component: Carrinho
    }
];
