import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { environment } from '../environments/environment.prod';
import { AccountService } from './shared/services/account.service';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shopbot';

  constructor(
    private swPush: SwPush,
    private accountService: AccountService,
    private authService: AuthService
  ) {}

ngOnInit(): void {
    this.swPush.requestSubscription({ serverPublicKey: environment.publicKey })
    .then((sub:any) => {
    let adminPush = sub.toJSON()
    this.accountService.updateStaff(this.authService.getUser._id, {adminPush}).subscribe()
  }).catch((err:any) => console.error("Could not subscribe to notifications", err));
}

}
