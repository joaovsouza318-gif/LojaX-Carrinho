import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { PessoaCadastro } from './pessoa-cadastro/pessoa-cadastro';
import { Carrinho } from './carrinho/carrinho';
import { Produtos } from './produtos/produtos';
import { SetorService } from './service/setor/setor-service';
import { Listaprodutos } from './listaprodutos/listaprodutos';


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
        path: "lista-produtos",
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
    },
    {
        path: "setores", component: SetorService 
    }
];
