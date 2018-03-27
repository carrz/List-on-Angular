import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(public dialog: MatDialog, public authService: AuthService) {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterModalComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.authService.signup(result.email, result.password);
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.authService.user.subscribe((user) => {
      if (user) {
        // Todavía no pasa nada
      } else {
      this.openDialog();
    }
  });
}
}
