import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { PessoaCadastro } from './pessoa-cadastro/pessoa-cadastro';
import { Carrinho } from './carrinho/carrinho';
import { Produtos } from './produtos/produtos';
import { SetorComponent } from './setor/setor';

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
    },
    {
        path: "produtos",
        component: Produtos
    }
    {
        path: "setores", component: SetorComponent 
    }
];
