import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  constructor(private firebaseAuth: AngularFireAuth) {
    // Si estoy logueando previamente obtendré el usuario
    this.user = firebaseAuth.authState;
  }
  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Bienvenido!', value);
      })
      .catch((error) => {
        console.log('Se fue todo a la B!!! >' + error);
      });
  }
  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Hola de nuevo!', value);
      })
      .catch(error => {
        console.log('Something went wrong:' + error);
      });
  }
  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
}
