import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'trab-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent implements OnInit {
  assuntos = ['O que vai ter na Janta?'];
  name: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => this.name = this.assuntos[res.id]);
  }

  ngOnInit() {
  }

}
