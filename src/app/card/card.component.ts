import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'trab-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() name: string;
  @Input() descricao: string;
  @Input() link: string;
  @Input() imagem: string;
  constructor() { }

  ngOnInit() {
  }

}
