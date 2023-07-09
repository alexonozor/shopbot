import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { FundRequest } from '../models/fund-request';
import { FundRequestsService } from '../services/fund-request.service';

@Injectable({
  providedIn: 'root'
})

export class FundRequestsResolver implements Resolve<FundRequest[]> {
  constructor(private fundRequestService: FundRequestsService) {}

  resolve(): Observable<FundRequest[]> {
    return this.fundRequestService.getFundRequests();
  }
}


@Injectable({
  providedIn: 'root'
})

export class FundRequestResolver implements Resolve<FundRequest> {
  constructor(private fundRequestService: FundRequestsService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<FundRequest> {
    const id = route.paramMap.get('id')
    return this.fundRequestService.getFundRequest(id);
  }
}