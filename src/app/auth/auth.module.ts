import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatSnackBarModule }from '@angular/material/snack-bar'; 
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    CommonModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
