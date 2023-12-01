import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})

export class UsersResolver implements Resolve<User[]> {
  constructor(private userService: UsersService) {}

  resolve(): Observable<User[]> {
    return this.userService.getUsers({
      data: { '$match': { country: 'Nigeria'  }},
      control:[{$sort:{'createdAt': -1}},{$limit:20},{$skip:0}] 
     });
  }
}


@Injectable({
  providedIn: 'root'
})

export class UserResolver implements Resolve<User> {
  constructor(private userService: UsersService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const id = route.paramMap.get('id')
    return this.userService.getUser(id);
  }
}

@Injectable({
  providedIn: 'root'
})

export class UserCountResolver implements Resolve<number> {
  constructor(private userService: UsersService) {}
  resolve(): Observable<number> {
    return this.userService.countUsers();
  }
}

