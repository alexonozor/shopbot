import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { Observable, startWith, map } from 'rxjs';
import { Cuisine } from 'src/app/shared/models/cuisine';
import { Store } from 'src/app/shared/models/store';
import { CuisinesService } from 'src/app/shared/services/cuisines.service';
import { StoreService } from '../../store.service';
import { finalize } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cuisines-tab',
  templateUrl: './cuisines-tab.component.html',
  styleUrls: ['./cuisines-tab.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    StoreService
  ]
})
export class CuisinesTabComponent  {
  @Input() store: Store | any;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  cuisineCtrl = new FormControl();
  filteredCuisines: Observable<Cuisine[]>;
  isLoading: boolean = false;
  cuisines: Cuisine[] = [];

  @ViewChild('fruitInput', {static: false}) fruitInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete!: MatAutocomplete;

  constructor(
    private cuisinesService: CuisinesService,
    private storeService: StoreService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.store = this.route.parent?.parent?.snapshot.data['store'] as Store
    this.cuisinesService.getCuisines().subscribe((cuisines) => {
      this.cuisines = cuisines
    })
    this.filteredCuisines = this.cuisineCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.cuisines.slice()));
  }



  remove(cuisine: Cuisine): void {
    const index = this.store.cuisines.indexOf(cuisine);
    if (index >= 0) {
      this.store.cuisines.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.store.cuisines.push(event.option.value);
    this.fruitInput.nativeElement.value = '';
    this.cuisineCtrl.setValue(null);
  }

  private _filter(value: any): Cuisine[] {
    if (typeof value == 'string') {
      const filterValue = value.toLowerCase();
       return this.cuisines.filter(cuisine => cuisine.name.toLowerCase().indexOf(filterValue) === 0);
    } else {
      const filterValue = value.name.toLowerCase();
       return this.cuisines.filter(cuisine => cuisine.name.toLowerCase().indexOf(filterValue) === 0);
    }
    
  }

  save() {
   this.isLoading = true;
   const cuisinesIds = this.store.cuisines.map((cuisine:Cuisine) => cuisine._id)
   this.storeService.saveStore({cuisines: cuisinesIds}, this.store._id)
   .pipe(finalize(() => this.isLoading = false))
   .subscribe((data) => {
      this.snackBar.open('Cuisines Updated', "Ok", {duration: 200})
   })
  }

}
