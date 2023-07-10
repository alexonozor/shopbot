import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionsService } from 'src/app/shared/services/transaction.service';
import { Transaction } from 'src/app/shared/models/transaction';

@Component({
  selector: 'app-payouts-details',
  templateUrl: './payouts-details.component.html',
  styleUrls: ['./payouts-details.component.scss']
})


export class PayoutsDetailsComponent implements OnInit {
  transaction!: Transaction;

  constructor(
    private route: ActivatedRoute,
    private transactionsService: TransactionsService,
    private router: Router,
  ) {
    this.transaction = this.route.snapshot.data['transaction'];
  }
  
  ngOnInit() {
    
    
  }

  closeModal() {
    this.router.navigate(['dashboard', 'reports', 'payouts', 'list']);
  }

  goToOrder(id:string) {
    this.router.navigate(['dashboard', 'orders', id, 'details']);
  }
}

