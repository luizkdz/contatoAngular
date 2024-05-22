import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { ServiceService } from '../../componentes/service/service.service';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent implements OnInit{
  formulario!: FormGroup;

  constructor(private service : ServiceService, private router : Router, private activatedRoute : ActivatedRoute){
    this.formulario = new FormGroup({
      nome: new FormControl('Joao', Validators.required),
      telefone: new FormControl('31 99999999',Validators.required),
      email: new FormControl('joao@gmail.com',[Validators.required,Validators.email]),
      aniversario: new FormControl('24-02-1980'),
      redes: new FormControl('teste'),
    })

  }

  
  ngOnInit(): void {
    this.carregarContato();
    
  }

carregarContato(){
  const id = this.activatedRoute.snapshot.paramMap.get('id');
  console.log('ID:', id); // Adicione este log
    if(id){
      this.service.buscarPorId(parseInt(id)).subscribe(contato => {
        this.formulario.patchValue(contato);
        
  })}
  
    }
    

  salvarContato() {
    const contato = this.formulario.value;
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    contato.id = id ? parseInt(id) : null;
    this.service.editarOuSalvarContato(contato).subscribe(() => {
      this.formulario.reset();
      this.router.navigateByUrl('lista-contatos');
    })
  }

cancelar(): void {
  this.router.navigateByUrl('lista-contatos');
}
}
