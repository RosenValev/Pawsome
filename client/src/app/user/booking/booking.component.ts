import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  bookingForm!: FormGroup;

  ngOnInit(): void {
    this.bookingFormInitialize();
  }

  bookingFormInitialize() {
    this.bookingForm = this.fb.group({
      petName: ['', Validators.required],
      petType: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      reason: ['', Validators.required]
    })
  }

  submitBookingForm() { }

}
