import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  imports: [
    CommonModule,
    MatProgressBarModule
  ]
})
export class StatsComponent implements OnInit {
  @Input() stat: any;
  @Input() loading!: boolean;
  @Input() currency!:string;


  constructor() { }

  ngOnInit(): void {
  }

}
