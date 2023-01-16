import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { finalize } from 'rxjs/operators';
import { JwtService } from "../../../shared/services";
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userForm: FormGroup;
  public check: boolean = false;
  public isLoading: boolean = false;
  public loginInvalid: boolean = false;
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private jwtService: JwtService,
    private router: Router,
    private _snackBar: MatSnackBar

  ) {
    this.userForm = fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
      ]],
    });
  }

  ngOnInit(): void {
    this.jwtService.destroyToken();
  }



  onSubmit() {
    this.isLoading = true;
    this.auth.login(this.userForm.getRawValue())

      .pipe(finalize(() => this.isLoading = false))
      .subscribe(data => {
        if (data.status == 200) {
          this.auth.saveToken(data.access_token)
           this.getUser(data.email)
        } else {
          this.openSnackBar(data.msg);
        }
      },
        (error: Error) => {
          // this.alertService.danger(`Failed Login`);
          console.log(error);
        })
  }

  openSnackBar(msg:string) {
    this._snackBar.open(msg, 'ok', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  getUser(email: string) {
    this.auth.getUserByEmail(email).subscribe((user:any) => {
      this.auth.saveUser(user)
      this.router.navigate(['dashboards'])
    })
  }


}
