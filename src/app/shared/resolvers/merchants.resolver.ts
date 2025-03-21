import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Merchant } from '../models/merchant';
import { MerchantsService } from '../services/merchant.service';

export const merchantsResolver: ResolveFn<Merchant[]> = () => {
  const merchantService = inject(MerchantsService);
  return merchantService.getMerchants();
};

export const merchantResolver: ResolveFn<Merchant> = (route) => {
  const merchantService = inject(MerchantsService);
  const id = route.paramMap.get('id');
  return merchantService.getMerchant(id);
};