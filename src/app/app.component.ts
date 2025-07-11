import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment.prod';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { NgProgressbar } from 'ngx-progressbar';
import { NgProgressHttp } from 'ngx-progressbar/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, NgProgressbar, NgProgressHttp],
  // providers: [SwUpdate]
})

export class AppComponent implements OnInit {
  title = 'shopbot';

  constructor(
    // private swUpdate: SwUpdate,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // this.checkSWUpdate();
  }

  // checkSWUpdate(): void {
  //   if (environment.production) {
  //     // Subscribe new worker is available
  //     this.swUpdate.checkForUpdate().then((event) => {
  //       // update available: ask the user to reload
  //       if (event) {
  //         const snackBarRef = this.snackBar.open('Newer version of the app is available', 'Refresh');
  
  //       snackBarRef.onAction().subscribe(() => {
  //         window.location.reload();
  //       });
  //       }
        
  //     });
  
  //     this.swUpdate.activateUpdate().then((event) => {
  //       console.log('Old version was', event);
  //       console.log('New version is', event);
  //     });
  
  //     // Check for new version
  //     this.swUpdate.checkForUpdate();
  //   }
  // }
}
