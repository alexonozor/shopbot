import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PayoutsDetailsComponent } from '../../dashboard/reports/payouts/payouts-details/payouts-details.component';

@Injectable()
export class ModalGuard implements CanActivate {
  constructor(private dialog: MatDialog, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Open the modal dialog
    

    const id = route.paramMap.get('id');
    
    const dialogRef = this.dialog.open(PayoutsDetailsComponent, {
      data: { id },
    });

    // // Handle the modal dialog closing
    // dialogRef.afterClosed().subscribe(() => {
    //   // Redirect back to the main component
    //   this.router.navigate([{ outlets: { modal: null } }]);
    // });

    return false; // Prevent the auxiliary route from activating by returning false
  }
}
