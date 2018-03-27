import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Verso } from '../verso';

@Component({
  selector: 'app-verso-formulario',
  templateUrl: './verso-formulario.component.html',
  styleUrls: ['./verso-formulario.component.css']
})
export class VersoFormularioComponent implements OnInit {
  @Input() verso: Verso = new Verso();
  @Output() submit = new EventEmitter<Verso>();
  versoForm: FormGroup;
  /*   versoForm = new FormGroup({
      jugador: new FormControl(),
      contenido: new FormControl()
    }); */

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  agregarVerso() {
    if (this.versoForm.valid) {
      let newVerso = new Verso();
      newVerso.nombreJugador = this.verso.nombreJugador;
      newVerso.contenido = this.verso.contenido;
      this.submit.emit(newVerso);
      this.versoForm.reset();
    }
  }

  createForm() {
    this.versoForm = this.fb.group({
      jugador: [this.verso.nombreJugador, [Validators.required, Validators.minLength(3)]],
      contenido: [this.verso.contenido, Validators.required],
    });

    this.versoForm.valueChanges.subscribe(() => {
      this.verso.nombreJugador = this.versoForm.value.jugador;
      this.verso.contenido = this.versoForm.value.contenido;
    });
  }
}
