import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Form } from 'react-router-dom';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {
  formulario!: FormGroup;


  constructor(){
    this.formulario = new FormGroup({
      nome: new FormControl('Joao', Validators.required),
      telefone: new FormControl('31 99999999',Validators.required),
      email: new FormControl('joao@gmail.com',[Validators.required,Validators.email]),
      aniversario: new FormControl('24-02-1980'),
      redes: new FormControl('teste'),
    })
  }

salvarContato() : void {
  console.log(this.formulario.value);
}

cancelar(): void {
  console.log("cancelado");
}
}
