import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map, tap, windowTime} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {Auth, User} from '../models/auth';
import {JwtService} from './jwt.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
// import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  decodeToken: any;
  helper = new JwtHelperService();
  private hostServer: string = environment.hostServer;
  isLoggedIn: boolean = false;
  private userDetails: BehaviorSubject<null> | any;


  constructor(
    private http: HttpClient,
    private jwtService: JwtService,
    private router: Router
  ) {
  }



  login(params:any): Observable<any> {
    return this.http.post(`${this.hostServer}/auth/login?user=staff`, params)
  }

  saveToken(token: string): void {
    window.localStorage.setItem('token', token)
  }

  saveTenantId(tenantId: string): void {
    window.localStorage.setItem('tenantId', tenantId)
  }

  get getTenantId(): string | null {
    return localStorage.getItem('tenantId');
  }

  get getUser() {
    let user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  }

  saveUser(user: any): void {
     let stringUser = JSON.stringify(user)
    window.localStorage.setItem('user', stringUser)
  }

  getUserByEmail(email:string): Observable <any> {
    return this.http.get(`${this.hostServer}/staffs/${email}/email`)
  }

  getToken(): string | null {
   return window.localStorage.getItem('token')
  }

  register(params:any): Observable<any> {
    return this.http.post(`${this.hostServer}/staffs`, params)
  }

  updatePassword(params:any) {
    return this.http.post(`${this.hostServer}/staffs/update/password`, params)
  }

  get getUserChanged(): Observable<any> {
      return this.userDetails.asObservable();
  }

  setUserChange(user:any) {
    return this.userDetails.next(user);
  }

  logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('tenantId');
    this.router.navigate(['authentication']);
  }


  loggedIn() {
    const token = this.jwtService.getToken();
    return !this.helper.isTokenExpired(token);
  }

  get isAdmin() {
    const isAdmin = localStorage.getItem('USER_TYPE');
    return isAdmin == 'ADMIN';

  }


}
