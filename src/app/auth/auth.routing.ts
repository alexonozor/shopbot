import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


export const AUTH_ROUTE: Routes = [
  { path: '', component: LoginComponent }
];


