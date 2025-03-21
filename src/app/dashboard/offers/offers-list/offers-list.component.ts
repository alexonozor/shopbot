import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../../shared/services/offers.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Offer } from '../../../shared/models/offer';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatChipsModule,
    MatMenuModule,
    RouterModule,
    MatPaginatorModule,
    FlexLayoutModule
  ]
})
export class OffersListComponent implements OnInit {
  offers!: Offer[];
  constructor(
    private route: ActivatedRoute,
    private offerService: OffersService,
    private _matDialog: MatDialog
  ) { 

  }

  ngOnInit(): void {
    this.offers = this.route.snapshot.data['offers'] as Offer[]
  }

  deleteOffer(id:string, i:number) {
    this.offers.splice(i, 1)
    this.offerService.deleteOffer(id).subscribe()
  }
}
