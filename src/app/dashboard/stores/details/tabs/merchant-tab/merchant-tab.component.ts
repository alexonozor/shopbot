import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/shared/models/store';

@Component({
  selector: 'app-merchant-tab',
  templateUrl: './merchant-tab.component.html',
  styleUrls: ['./merchant-tab.component.scss']
})
export class MerchantTabComponent implements OnInit {
  @Input() store: Store | any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
