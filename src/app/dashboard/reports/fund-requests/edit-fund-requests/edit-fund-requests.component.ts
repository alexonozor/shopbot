import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormArray, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AuthService } from 'src/app/shared/services';
import { FundRequestsService } from '../../../../shared/services/fund-request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FundRequest } from 'src/app/shared/models/fund-request';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-edit-fund-requests',
  templateUrl: './edit-fund-requests.component.html',
  styleUrls: ['./edit-fund-requests.component.scss'],
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
export class EditFundRequestsComponent implements OnInit {

  requestForm!: FormGroup;
  isLoading: boolean = false;
  fund: FundRequest;
  deliveries: DeliveryZone[] = [];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private requestedFundService: FundRequestsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.fund = this.route.snapshot.data['fund']
    this.deliveries = this.route.snapshot.data['deliveries']; 
  }

  ngOnInit(): void {
   this.requestForm = this.fb.group({
      requestedBy: [this.auth.currentUser._id, Validators.required],
      category: [this.fund.category, Validators.required],
      status: [this.fund.status, Validators.required],
      items: this.fb.array([]),
      total: [{ value: this.fund.total, disabled: true } as any, Validators.required],
      country: [this.fund.country, Validators.required],
      currency: [this.fund.currency, Validators.required],
      description: [this.fund.description],
    });

    this.fund.items.forEach((item) => {
      this.addItems(item);
    })
  }

  newItems(item?:any): FormGroup {
    const itemGroup = this.fb.group({
      item: [item?.item, Validators.required],
      price: [item?.price, Validators.required],
      quantity: [item?.quantity, Validators.required],
      note: [item?.note, Validators.required]
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

  addItems(item?:any) {
    this.items.push(this.newItems(item));
  }

removeItems(i:number) {
  this.items.removeAt(i);
}
 
get items() : FormArray {
  return this.requestForm.get("items") as FormArray
}

submit() {
  this.requestedFundService.updateFundRequests(this.fund._id, this.requestForm.getRawValue())
  .subscribe(() => {
    this.back();
  })
}

back() {
  this.router.navigate(['dashboard', 'reports', 'fund-requests', 'list'])
}

}