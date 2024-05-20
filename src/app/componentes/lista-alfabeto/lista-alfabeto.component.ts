import { Component } from '@angular/core';
import { ContatoComponent } from '../contato/contato.component';
import agendaContato from '../../agenda.json';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-alfabeto',
  standalone: true,
  imports: [ContatoComponent,FormsModule],
  templateUrl: './lista-alfabeto.component.html',
  styleUrl: './lista-alfabeto.component.css'
})


export class ListaAlfabetoComponent {

  
filtroContatoTexto : string = "";
filtraContatoPorTexto() : Contato[]{
  if(!this.filtroContatoTexto){
    return this.agenda;
  }
  else{
    return this.agenda.filter(contato => {
      return contato.nome.toLowerCase().includes(this.filtroContatoTexto);
    })
  }
}
  alfabeto : string = "abcdefghijklmnopqrstuvwxyz"

  agenda : Contato[] = agendaContato;
  filtraContatos(letra : string) : Contato[] {
    return this.filtraContatoPorTexto().filter(x => x.nome.toLowerCase().startsWith(letra));
}

}
interface Contato{
  "id" : number,
  "nome" : string,
  "telefone" : string
}
