import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { PessoaCadastro } from './pessoa-cadastro/pessoa-cadastro';
import { Carrinho } from './carrinho/carrinho';
import { Produtos } from './produtos/produtos';
<<<<<<< HEAD
import { SetorComponent } from './setor/setor';
=======
import { Listaprodutos } from './listaprodutos/listaprodutos';
>>>>>>> 26e19bd58baf3e1a1154a45fc009303b16a1c134

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
        path: "lista de produtos",
        component: Listaprodutos
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
