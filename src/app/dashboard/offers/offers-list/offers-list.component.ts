import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../../shared/services/offers.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Offer } from '../../../shared/models/offer';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
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
