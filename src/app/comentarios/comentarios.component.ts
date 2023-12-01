import {
  AfterContentChecked,
  Component,
  DoCheck,
  Input,
  OnInit,
} from '@angular/core';
import { ComentariosService } from './services/comentarios.service';
import { Comentario } from './models/comentario.model';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss'],
})
export class ComentariosComponent implements OnInit, AfterContentChecked {
  @Input() valueSearch: string = '';
  comentarios: Comentario[] = [];
  comentariosFiltrados: Comentario[] = [];

  constructor(private comentariosService: ComentariosService) {}

  ngOnInit(): void {
    this.populate();
  }

  ngAfterContentChecked(): void {
    if (this.valueSearch) {
      this.filtrarComentarios();
    } else {
      this.comentariosFiltrados = [];
    }
  }

  populate() {
    this.comentariosService.buscarComentarios().subscribe({
      next: (result) => {
        console.log(result);
        this.comentarios = result;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  favoritar(value: number) {
    this.comentarios.forEach((c) => {
      if (c.id == value) {
        c.favorito = !c.favorito;
      }
    });
  }

  filtrarComentarios() {
    this.comentariosFiltrados = this.comentarios.filter((c) =>
      c.titulo.includes(this.valueSearch)
    );
  }
}
