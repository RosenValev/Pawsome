import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { passwordMatch } from 'src/app/shared/passwordMatch';
import { emailPattern } from 'src/app/shared/emailPattern';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signUpFormInitialize();
    this.signInFormInitialize();
  };

  rightPanelActive: boolean = false;
  declare signUpForm: FormGroup;
  declare signInForm: FormGroup;

  signUpFormInitialize() {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required]],
    },
      {
        validators: [passwordMatch("password", "repeatPassword")]
      });
  };

  signInFormInitialize() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  };

  toggleRightPanel(): void {
    this.rightPanelActive = !this.rightPanelActive;
  };

  registerHandler() {
    if (this.signUpForm.valid) {
      this.userService.register(this.signUpForm?.value).subscribe(result => {
        console.log(result);
        this.signUpForm.reset();
        this.router.navigate(['/']);
      })
    }
  };

  loginHandler() {
    if (this.signInForm.valid) {
      this.userService.login(this.signInForm?.value).subscribe(result => {
        console.log(result)
        this.signInForm.reset();
        this.router.navigate(['/']);
      })
    }
  };


}