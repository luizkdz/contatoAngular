import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../componentes/service/service.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina-perfil',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pagina-perfil.component.html',
  styleUrl: './pagina-perfil.component.css'
})
export class PaginaPerfilComponent implements OnInit {
  contato : Contato = {
    id:0,
    nome:"mario",
    telefone:"555555555",
    email : "",
    aniversario: "",
    redes: ""
  }

id = this.activatedRouter.snapshot.paramMap.get('id');
  constructor(private service:ServiceService, private activatedRouter : ActivatedRoute, private router:Router){
  }
  ngOnInit(): void {
    
    if(this.id)
    this.service.buscarPorId(parseInt(this.id)).subscribe(contato => {
      this.contato = contato;
    })
  }
  cancelar(): void {
    this.router.navigateByUrl('lista-contatos');
  }
}
interface Contato{
  "id" : number,
  "nome" : string,
  "telefone" : string,
  "email" : string,
  "aniversario": string,
  "redes":string
}
