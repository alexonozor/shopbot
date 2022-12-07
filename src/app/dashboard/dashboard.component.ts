import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import {JwtService} from '../shared/services/jwt.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Auth } from '../shared/models/auth';
import { AuthService } from '../shared/services/auth.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { Role } from '../shared/models/role';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  public userType:string | undefined;
  destroyed = new Subject<void>();
  currentScreenSize: string | undefined;
  Role = Role

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(
    private jwtService: JwtService,
    private router: Router,
    private snackbar: MatSnackBar,
    public auth: AuthService,
    public breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    
  }

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  logOut() {
    this.auth.logout();
    this.snackbar.open('Logged Out', 'close', {duration: 2000});
    ;
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.breakpointObserver
    // .observe([
    //   Breakpoints.XSmall,
    //   Breakpoints.Small,
    //   Breakpoints.Medium,
    //   Breakpoints.Large,
    //   Breakpoints.XLarge,
    // ])
    // .pipe(takeUntil(this.destroyed))
    // .subscribe(result => {
    //   for (const query of Object.keys(result.breakpoints)) {
    //     if (result.breakpoints[query]) {
    //       this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
    //       if(this.currentScreenSize === 'Small' || this.currentScreenSize === 'XSmall') {
    //         this.sidenav.close()
    //       } else {
    //         this.sidenav.open()
    //       }
    //     }
    //   }
    // });
  }
}
