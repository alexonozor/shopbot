import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransfersService } from 'src/app/shared/services/transfer.service';
import { Transfer } from 'src/app/shared/models/transfer';

@Component({
  selector: 'app-payouts-details',
  templateUrl: './withdrawal-details.component.html',
  styleUrls: ['./withdrawal-details.component.scss']
})


export class WithdrawalDetailsComponent implements OnInit {
  transfer!: Transfer;

  constructor(
    private route: ActivatedRoute,
    private transfersService: TransfersService,
    private router: Router,
  ) {
    this.transfer = this.route.snapshot.data['transfer'];
  }
  
  ngOnInit() {}

  closeModal() {
    this.router.navigate(['dashboard', 'reports', 'withdrawals', 'list']);
  }

  goToOrder(id:string) {
    this.router.navigate(['dashboard', 'orders', id, 'details']);
  }
}

