import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  ApiUrl : string = "http://localhost:3000/contatos";
  
  constructor(private http:HttpClient) {
   }

obterContatos() : Observable<Contato[]> {
  return this.http.get<Contato[]>(this.ApiUrl)
}

adicionarContato(contato : Contato) : Observable<Contato>{
  return this.http.post<Contato>(this.ApiUrl,contato)
}

editarContato(contato : Contato) : Observable<Contato>{
  const url = `${this.ApiUrl}/${contato.id}`
  return this.http.put<Contato>(url,contato);
}

editarOuSalvarContato(contato : Contato){
  if(contato.id){
    return this.editarContato(contato);
  }
  else{
    return this.adicionarContato(contato);
  }
}

buscarPorId(id : number) : Observable<Contato>{
  const url = `${this.ApiUrl}/${id}`
  return this.http.get<Contato>(url);
}

}
interface Contato{
  "id" : number,
  "nome" : string,
  "telefone" : string,
  "email" : string,
  "aniversario" : string
  "redes" : string
}
