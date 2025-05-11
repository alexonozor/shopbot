import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  AfterViewInit,
  Inject,
} from '@angular/core';
import { JwtService } from '../shared/services/jwt.service';
import { Router, RouterModule } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../shared/services/auth.service';
import {
  BreakpointObserver,
  Breakpoints,
  LayoutModule,
} from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { Role } from '../shared/models/role';
import { Socket } from 'ngx-socket-io';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { Order } from '../shared/models/order';
import { OrdersService } from 'src/app/shared/services/order.service';
import { environment } from 'src/environments/environment';
import { AccountService } from '../shared/services/account.service';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';
import { MatExpansionModule } from '@angular/material/expansion';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../shared/interceptor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    FlexLayoutModule,
    LayoutModule,
    MatSnackBarModule,
    MatExpansionModule,
  ],
  providers: [
    OrdersService,
    AuthService,
    NotificationsService,
    provideCharts(withDefaultRegisterables()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  public userType: string | undefined;
  destroyed = new Subject<void>();
  currentScreenSize: string | undefined;
  Role = Role;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  showNotification: boolean = Notification.permission !== 'granted';

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(
    private snackbar: MatSnackBar,
    public auth: AuthService,
    public breakpointObserver: BreakpointObserver,
    @Inject(Socket) private socket: Socket,
    private orderService: OrdersService,
    private notificationService: NotificationsService,
  ) {}

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    return this.socket.fromEvent('order').pipe(map((data:any) => data)).subscribe((order:any) => {
      if (order) {
        this.orderService.broadcast(order as Order)
        this.notificationService.broadCast(order)
      }
    })
  }



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
    this.snackbar.open('Logged Out', 'close', { duration: 2000 });
  }

  closeWhenClick() {
    if (
      this.currentScreenSize === 'Small' ||
      this.currentScreenSize === 'XSmall'
    ) {
      this.sidenav.close();
    }
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
            if (
              this.currentScreenSize === 'Small' ||
              this.currentScreenSize === 'XSmall'
            ) {
              this.sidenav.close();
            } else {
              this.sidenav.open();
            }
          }
        }
      });
  }
}
