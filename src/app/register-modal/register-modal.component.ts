import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent implements OnInit {
  dialogForm: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegisterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.dialogForm = this.fb.group({
      'email' : [''],
      'password' : ['']
    });
  }
  onRegister() {
    this.data.email = this.dialogForm.value.email;
    this.data.password = this.dialogForm.value.password;
    this.dialogRef.close(this.data);
  }
}
