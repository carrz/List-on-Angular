import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Verso } from '../verso';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
/* import { MatCardModule } from '@angular/material/card'; */

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {
  @Input() id: number;
  @Input('mostrarVersos') mostrarVersos: boolean;
  @Output() mostrar = new EventEmitter<any>();
  versos: FirebaseListObservable<any[]>;
  constructor(private af: AngularFireDatabase) {
  }

  ngOnInit() {
    this.versos = this.af.list('/versos');
  }

  submit(verso: Verso) {
    this.versos.push({content: verso.contenido, player: verso.nombreJugador});
  }

  mostrarClick() {
    this.mostrar.emit({
      mostrar: !this.mostrarVersos,
      id: this.id
    });
  }

  deleteVerso(verso: string): void {
    console.log('Deleting... ' + verso);
    this.af.object('/versos/' + verso).remove();
  }

  addVerso(player: string, verso: string): void {

  }

}
