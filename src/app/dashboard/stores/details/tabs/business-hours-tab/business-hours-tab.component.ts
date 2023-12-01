import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { extendMoment } from 'moment-range';
import { Store } from '../../../../../shared/models/store';
import { StoreService } from '../../store.service';
import { finalize } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
const { range } = extendMoment(moment);



@Component({
  selector: 'app-business-hours-tab',
  templateUrl: './business-hours-tab.component.html',
  styleUrls: ['./business-hours-tab.component.scss']
})
export class BusinessHoursTabComponent implements OnInit {
  businessHoursForm!: FormGroup;
  days!: any[];
  @Input() store!: Store | any;
  public isLoading: boolean = false;
  horizontalPosition: MatSnackBarHorizontalPosition | undefined;
  verticalPosition: MatSnackBarVerticalPosition | undefined;


  constructor(
    private _formBuilder: FormBuilder,
    private storeService: StoreService,
    private _snackBar: MatSnackBar
    ) {

  }

  ngOnInit(): void {
	  let ranges = range(moment().day(0), moment().day(6)), /*can handle leap year*/
	  array = Array.from(ranges.by("days")); /*days, hours, years, etc.*/
    
	  let daysRange = array.map((m) => {
		return {
		  date: m.format("YYYY-MM-DD"),
		  openingTime: m,
		  closingTime: m,
		  day: m.format('dddd').toLowerCase(),
		  closed: false,
		  referenceDate: m,
		  neverOpen: false
		}
	  })
	  this.days = daysRange

	  let businessHoursKeys = Object.keys(this.store.businessHours) 
	  let days = businessHoursKeys.map((key) => {
		return { ...this.store.businessHours[key] }
	  })
	 this.businessHoursForm = this.createProductForm(days);
   console.log(this.businessHoursForm.value)
	}
  
	createProductForm(data: any): FormGroup {
	  return this._formBuilder.group({
		businessHours: this._formBuilder.group({ ...this.newOptions(data) })
	  })
	}
  
	newOptions(data?: any): FormGroup {
	  let f = {} as any;
	  for (let i = 0; i < data.length; i++) {
		f[data[i].name.toLowerCase()] = this._formBuilder.group({
		  name: [data[i].name, Validators.required],
		  openingTime: [new Date(data[i].openingTime), Validators.required],
		  closingTime: [new Date(data[i].closingTime), Validators.required],
		  closed: data[i].closed,
		  neverOpen: data[i].neverOpen
		})
	  }
	  return f as FormGroup;
	}

  formatDateTimeTo12Hrs(dateTimeString: string): moment.Moment {
    // Format the date-time in 12-hour format with AM/PM
    const formattedDateTime = moment(dateTimeString).format('YYYY-MM-DD hh:mm A');
  
    // Convert the formatted date-time back to a Moment object
    const momentFormattedDateTime = moment(formattedDateTime, 'YYYY-MM-DD hh:mm A');
  
    return momentFormattedDateTime;
  }


  // ngOnInit(): void {
  //   let ranges = range(moment().day(0), moment().day(6)), /*can handle leap year*/
  //   array = Array.from(ranges.by("days")); /*days, hours, years, etc.*/
  //   let daysRange = array.map((m) => {
  //     return {
  //       date: m.format("YYYY-MM-DD"),
  //       openingTime: m.toDate(),
  //       closingTime: m.add('hours', 9).toDate(),
  //       day: m.format('dddd').toLowerCase(),
  //       closed: false,
  //       referenceDate: m.format("YYYY-MM-DD"),
  //       neverOpen: false
  //     }
  //   })


  //   this.days = daysRange

   
  //   // console.log(this.store.businessHours)
  //   // convert to array
  //   let businessHoursKeys = Object.keys(this.store.businessHours) 
  //   let days = businessHoursKeys.map((key) => {
  //     return { ...this.store.businessHours[key] }
  //   })

   
  //   // daysRange = this.getDays(daysRange, businessHoursKeysObject)

 
  //  this.businessHoursForm = this.createProductForm(days)

   
   
  // }

  // createProductForm(data: any): FormGroup {
  //   return this._formBuilder.group({
  //     businessHours: this._formBuilder.group({ ...this.newOptions(data) })
  //   })

  // }

  // newOptions(data?: any): FormGroup {
  //   let f = {} as any;
  //   for (let i = 0; i < data.length; i++) {
  //     console.log(f[data[i].day])
  //     f[data[i].name.toLowerCase()] = this._formBuilder.group({
  //       name: [data[i].name, Validators.required],
  //       openingTime: [data[i].openingTime, Validators.required],
  //       closingTime: [data[i].closingTime, Validators.required],
  //       closed: data[i].closed,
  //       neverOpen: data[i].neverOpen
  //     })
  //   }
  //   return f as FormGroup;
  // }


  changeStoreStatus() {
    this.isLoading = true;
    this.store.paused = !this.store.paused;
    this.storeService.saveStore({paused:  this.store.paused}, this.store._id)
    .pipe(finalize(() => this.isLoading = false))
    .subscribe((store) => {
      this._snackBar.open(this.store.paused ? 'Store has been paused' : 'Store was resumed', 'ok', {
        duration: 5000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
  }

  save() {
    this.isLoading = true;
    this.storeService.saveStore(this.businessHoursForm.getRawValue(), this.store._id)
    .pipe(finalize(() => this.isLoading = false))
    .subscribe((store) => {
      this._snackBar.open('Opening Hour update', 'ok', {
        duration: 5000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
  }

}
