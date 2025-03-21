import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { finalize } from 'rxjs';
import { Store } from 'src/app/shared/models/store';
import { StoreService } from '../../store.service';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-pickup-and-delivery-tab',
  templateUrl: './pickup-and-delivery-tab.component.html',
  styleUrls: ['./pickup-and-delivery-tab.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  providers: [
    StoreService
  ]
})
export class PickupAndDeliveryTabComponent implements OnInit {
  isActive = false;
  protected store!: Store | any
  favoriteSeason: string | undefined;
  couriers: string[] = ['My own couriers', 'Shopbot couriers'];
  public isLoading: boolean = false;
  horizontalPosition: MatSnackBarHorizontalPosition | undefined;
  verticalPosition: MatSnackBarVerticalPosition | undefined;


  foods: any[] = [
    { value: 1, viewValue: 'Charge the same delivery fee for all orders' },
    { value: 2, viewValue: 'Free Delivery' },
    { value: 3, viewValue: 'Free Delivery for orders over certain amount.' },
    { value: 4, viewValue: 'Distance-base fees' },
    // { value: '5', viewValue: 'Charge flat fee base on areas' },
  ];
  pickupAndDeliveryForm!: FormGroup;


  constructor(
    private _formBuilder: FormBuilder,
    private storeService: StoreService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
    ) { 
      this.store = this.route.parent?.parent?.snapshot.data['store'] as Store
    }

  ngOnInit(): void {
    this.pickupAndDeliveryForm = this.createProductForm()
  }

  createProductForm(): FormGroup {
    return this._formBuilder.group({
      orderSettings: this._formBuilder.group({
        orderPrepTime: [this.store.orderSettings.orderPrepTime],
        enablePickup: [this.store.orderSettings.enablePickup],
        allowMinimumOrderAmount: [this.store.orderSettings.allowMinimumOrderAmount],
        minimumOrderAmount: [this.store.orderSettings.minimumOrderAmount],
        pickUpInstruction: [this.store.orderSettings.pickUpInstruction]
      }),
      deliveryService: this._formBuilder.group({
        deliverOrderToCustomers: [this.store.deliveryService.deliverOrderToCustomers]
      }),
      deliverySettings: this._formBuilder.group({
        deliveryType: [this.store.deliverySettings.deliveryType],
        deliveryRadius: [this.store.deliverySettings.deliveryRadius],
        deliveryFeeNumber: [this.store.deliverySettings.deliveryFeeNumber],
        deliveryFee: [this.store.deliverySettings?.deliveryFee],
        minimumOrderAmountForFreeDelivery: [this.store.deliverySettings?.minimumOrderAmountForFreeDelivery || 0],
        deliveryFeeForAllOrder: [this.store.deliverySettings?.deliveryFeeForAllOrder],
        minimumDeliveryFee: [this.store.deliverySettings?.minimumDeliveryFee],
        deliveryFeeByKilometers: [this.store.deliverySettings?.deliveryFeeByKilometers || 50],
        allowMinimumOrderAmount: [this.store.deliverySettings?.allowMinimumOrderAmount || 0],
        minimumOrderAmount: [this.store.deliverySettings?.minimumOrderAmount || 0],
        estimatedDeliveryTime: this._formBuilder.group({
            minimum: [this.store.deliverySettings?.estimatedDeliveryTime?.minimum || 0],
            maximum: [this.store.deliverySettings?.estimatedDeliveryTime?.maximum || 0]
        }),
        enableDeliveryInstructions: [this.store.deliverySettings.enableDeliveryInstructions],
        deliveryInstructions: [this.store.deliverySettings.deliveryInstructions]
      })
    })
  }

  save() {
    this.isLoading = true;
    this.store.paused = !this.store.paused;
    this.storeService.saveStore(this.pickupAndDeliveryForm.getRawValue(), this.store._id)
    .pipe(finalize(() => this.isLoading = false))
    .subscribe((store) => {
      this._snackBar.open('Saved', 'ok', {
        duration: 5000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
  }

}
