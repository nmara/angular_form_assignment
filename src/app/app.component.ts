import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('frm') subscriptionForm: NgForm;
  submitted = false;
  defaultSubscription = "advanced";

  user = {
    email: '',
    password: '',
    subscription: ''
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.subscriptionForm);
    this.user.email = this.subscriptionForm.value.email;
    this.user.password = this.subscriptionForm.value.password;
    this.user.subscription = this.subscriptionForm.value.subscription;
    this.subscriptionForm.reset();
  }
}
