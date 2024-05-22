import { Routes } from '@angular/router';
import { ListaAlfabetoComponent } from './componentes/lista-alfabeto/lista-alfabeto.component';
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';
import { PaginaPerfilComponent } from './paginas/pagina-perfil/pagina-perfil.component';

export const routes: Routes = [
    {
        path:"lista-contatos", component: ListaAlfabetoComponent,
    },
    {
        path:"formulario/:id", component:FormularioContatoComponent
},
    {
        path:"", redirectTo:"/lista-contatos", pathMatch:'full'
    },
    {
        path:"pagina-perfil/:id" , component:PaginaPerfilComponent
    }
];
