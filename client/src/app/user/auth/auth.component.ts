import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  rightPanelActive: boolean = false;
  signUpForm!: FormGroup;
  signInForm!: FormGroup;


  ngOnInit(): void {
    this.signUpFormInitialize();
    this.signInFormInitialize();
  }

  signUpFormInitialize() {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });
  }

  signInFormInitialize() {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  toggleRightPanel(): void {
    this.rightPanelActive = !this.rightPanelActive;
  }

  onRegisterHandler() {
    this.userService.onRegister(this.signUpForm.value).subscribe(result => {
      console.log(result)
    })
  }

  onLoginHandler() {
    this.userService.onLogin(this.signInForm.value).subscribe(result => {
      console.log(result)
    })
  }
}