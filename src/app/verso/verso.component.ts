import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Verso } from '../verso';

@Component({
  selector: 'app-verso',
  templateUrl: './verso.component.html',
  styleUrls: ['./verso.component.css']
})
export class VersoComponent implements OnInit {
  @Input() verso: any;
  @Output() ondelete: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteVerso() {
    console.log(this.verso.$key);
    this.ondelete.emit(this.verso.$key);
  }
}
