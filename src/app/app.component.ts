import { Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment.prod';
import { AccountService } from './shared/services/account.service';
import { AuthService } from './shared/services/auth.service';
import { OneSignal } from 'onesignal-ngx';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shopbot';

  constructor(
    private accountService: AccountService,
    private authService: AuthService,
    private swUpdate: SwUpdate,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.checkSWUpdate();
  }

  checkSWUpdate(): void {
    if (environment.production) {
      // Subscribe new worker is available
      this.swUpdate.available.subscribe((event) => {
        console.log('Current version is', event.current);
        console.log('Available version is', event.available);
        // update available: ask the user to reload
        const snackBarRef = this.snackBar.open('Newer version of the app is available', 'Refresh');
  
        snackBarRef.onAction().subscribe(() => {
          window.location.reload();
        });
      });
  
      this.swUpdate.activated.subscribe((event) => {
        console.log('Old version was', event.previous);
        console.log('New version is', event.current);
      });
  
      // Check for new version
      this.swUpdate.checkForUpdate();
    }
  }
}
