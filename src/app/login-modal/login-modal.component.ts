import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  userForm: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<LoginModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      'email' : [''],
      'password' : ['']
    });
  }
  onLogin() {
    this.data.email = this.userForm.value.email;
    this.data.password = this.userForm.value.password;
    this.dialogRef.close(this.data);
  }
}
