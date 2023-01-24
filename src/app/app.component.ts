import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { environment } from '../environments/environment.prod';
import { AccountService } from './shared/services/account.service';
import { AuthService } from './shared/services/auth.service';
import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shopbot';

  constructor(
    private accountService: AccountService,
    private authService: AuthService,
    private oneSignal: OneSignal
  ) {
    
  }

ngOnInit(): void {
    
}

}
