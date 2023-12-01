import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario.model';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private httpService: HttpClient) { }

  public buscarComentarios(): Observable<Comentario[]> {
   return this.httpService.get<Comentario[]>('assets/json/comentarios.json')
  }
}
