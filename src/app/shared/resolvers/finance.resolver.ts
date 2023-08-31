import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { FinancesService } from '../services/finance.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class FinancesResolver implements Resolve<any[]> {
  constructor(private financesService: FinancesService) {}

  resolve(): Observable<any[]> {
    const startOfMonth = moment().startOf('month').toDate()
    const endOfMonth   = moment().endOf('month').toDate()
    return this.financesService.getFinances({start: startOfMonth, end: endOfMonth })
  }
}

