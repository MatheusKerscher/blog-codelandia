import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comentario } from '../models/comentario.model';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-comentario',
  templateUrl: './card-comentario.component.html',
  styleUrls: ['./card-comentario.component.scss'],
})
export class CardComentarioComponent implements OnInit {
  @Input() comentario?: Comentario;

  @Output() emmiterClick = new EventEmitter();

  faHeartRegular = faHeart;
  faHeartSolid = faHeartSolid;

  constructor() {}

  ngOnInit(): void {}

  formatarData(data: Date | string | undefined): string {
    if (!data) {
      return '';
    }

    const messes = [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ];

    const dataObj = new Date(data);
    const dia = dataObj.getDate();
    const mes = messes[dataObj.getMonth()];
    const ano = dataObj.getFullYear();

    return `${dia < 10 ? '0' + dia : dia} de ${mes}, ${ano}`;
  }

  onClick() {
    this.emmiterClick.emit(this.comentario?.id);
  }
}
