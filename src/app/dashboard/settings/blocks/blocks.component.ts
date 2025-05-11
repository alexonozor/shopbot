import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-block',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss'],
  imports: [
    RouterModule
  ]
})
export class BlockComponent implements OnInit {

  constructor(
  
  ) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
  }

 


}
