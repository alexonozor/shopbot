import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Input() stat: any;
  @Input() loading!: boolean;
  @Input() currency!:string;


  constructor() { }

  ngOnInit(): void {
  }

}
