import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComentarioComponent } from './card-comentario/card-comentario.component';
import { ComentariosComponent } from './comentarios.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CardComentarioComponent, ComentariosComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ComentariosComponent],
})
export class ComentariosModule {}
