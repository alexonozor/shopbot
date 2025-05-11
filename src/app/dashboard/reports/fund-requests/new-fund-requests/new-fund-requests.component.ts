import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormArray, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AuthService } from 'src/app/shared/services';
import { FundRequestsService } from '../../../../shared/services/fund-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-new-fund-requests',
  templateUrl: './new-fund-requests.component.html',
  styleUrls: ['./new-fund-requests.component.scss'],
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class NewFundRequestsComponent implements OnInit {

  requestForm = this.fb.group({
    requestedBy: [this.auth.currentUser._id, Validators.required],
    category: ['', Validators.required],
    status: ['Pending', Validators.required],
    items: this.fb.array([]),
    total: [{ value: 0, disabled: true } as any, Validators.required],
    currency: ['', Validators.required],
    country: ['', Validators.required],
    description: [''],
  });
  isLoading: boolean = false;
  deliveries: DeliveryZone[] = [];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: ActivatedRoute,
    private requestedFundService: FundRequestsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addItems();
    this.deliveries = this.route.snapshot.data['deliveries']; 
  }

  newItems(): FormGroup {
    const itemGroup = this.fb.group({
      item: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      note: ['', Validators.required]
    });
  
    itemGroup.valueChanges.subscribe(() => {
      this.calculateTotal();
    });
  
    return itemGroup;
 }

 calculateTotal() {
  
  let total = 0;
  this.items.controls.forEach((itemGroup: any) => {
    const price = itemGroup.get('price').value;
    const quantity = itemGroup.get('quantity').value;

    if (price && quantity) {
      total += price * quantity;
    }
  });

  this.requestForm.patchValue({
    total: total // Assuming you want the total to have 2 decimal places
  });
}

 addItems() {
  this.items.push(this.newItems());
}

removeItems(i:number) {
  this.items.removeAt(i);
}
 
get items() : FormArray {
  return this.requestForm.get("items") as FormArray
}

submit() {
  this.requestedFundService.createFundRequests(this.requestForm.getRawValue())
  .subscribe(() => {
    this.back();
  })
}

back() {
  this.router.navigate(['dashboard', 'reports', 'fund-requests', 'list'])
}

}