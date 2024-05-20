import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { ListaAlfabetoComponent } from './componentes/lista-alfabeto/lista-alfabeto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent,ListaAlfabetoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetoAngular';
}
