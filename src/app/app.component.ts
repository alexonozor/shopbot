import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shopbot';

  constructor(
    private swPush: SwPush,
   
    // private newsletterService: NewsletterService
  ) {}

  ngOnInit(): void {
    
   }



  subscribeToNotifications() {
    
    this.swPush.requestSubscription({
        serverPublicKey: environment.publicKey
    })
    .then(sub => {
      console.log(sub)
    })
    .catch(err => console.error("Could not subscribe to notifications", err));
}
}
