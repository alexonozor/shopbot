import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../shared/interceptor/token-interceptor.service';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmComponent } from '../shared/components/confirm/confirm.component';
import { MaterialModule } from '../material';
import { HomeComponent } from './home/home.component';
import { OrdersService } from '../shared/services/order.service';
import { NgChartsModule } from 'ng2-charts';
import { DashboardService } from '../shared/services/dashboard.service';
import { StoresService } from './stores/stores.service';
import { AuthService } from '../shared/services';
import { SharedModule } from '../shared/shared.module';
import { NotificationsService } from '../shared/services/notifications.service';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
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
    MaterialModule,
    NgChartsModule,
    SharedModule
  ],
  entryComponents: [
    ConfirmComponent
  ],
  providers: [
    StoresService,
    DashboardService,
    OrdersService,
    AuthService,
    NotificationsService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],

})
export class DashboardModule { }
