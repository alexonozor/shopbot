import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Banner } from '../models/banner';
import { BannersService } from '../services/banners.service';

@Injectable({
  providedIn: 'root'
})

export class BannersResolver implements Resolve<Banner[]> {
  constructor(private bannersService: BannersService) {}

  resolve(): Observable<Banner[]> {
    return this.bannersService.getBanners();
  }
}


@Injectable({
  providedIn: 'root'
})

export class BannerResolver implements Resolve<Banner> {
  constructor(private bannerService: BannersService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<Banner> {
    const id = route.paramMap.get('id')
    return this.bannerService.getBanner(id);
  }
}
