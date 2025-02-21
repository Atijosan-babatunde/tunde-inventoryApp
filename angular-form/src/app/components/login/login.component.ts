import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
  <div class="login-container">
    <div class="login-background">
      <div class="text-container">
        <div>
            <h1>Welcome to </h1>
            <div class="app-name">real inventory application</div>
        </div>
      </div>
      <div class="login-form">
        <!-- <h2>Welcome Back</h2>
        <p>Enter your credentials to continue.</p> -->
        <div>
            <form [formGroup]="loginForm" (ngSubmit)="loginUser()">
              <div class="form-container">
                <div class="input-container">
                    <div class="icon-container">
                        <img src="/assets/images/auth/email.svg" alt="">
                    </div>
                  <label class="label" for="email"> Email </label>
                  <input formControlName="username"
                  matInput class="custom-input form-control" placeholder="Enter Email" type="text" />
                </div>



                <div class="password-input">
                  <div class="input-container">
                    <div class="lock-container">
                        <img src="/assets/images/auth/padlock.svg" alt="">
                    </div>
                    <label class="label" for="email"> Password </label>
                    <input
                      formControlName="password"
                      placeholder="Enter Password"
                      [type]="hide ? 'text' : 'password'"
                      class="custom-input"
                      type="password"
                    />
                  
                <!-- </div> -->
                  </div>
                  <div class="show_password">
                    <span class="password-toggle">
                      <span *ngIf="!hide"
                        ><img
                          width="40%"
                          src="/assets/images/auth/eye-hide-icon.jpeg"
                          alt=""
                      /></span>
                      <span *ngIf="hide"
                        ><img
                          width="53%"
                          src="/assets/images/auth/eye-open-icon.jpeg"
                          alt=""
                      /></span>
                    </span>
                  </div>
                </div>
              </div>
      
              <div class="login-btn">
                <button type="button" type="submit" class="long-button">
                  Login
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrl: './login.component.css',
})
export class LoginComponent {
  hide: boolean = false;
  loginForm!: FormGroup;
  loader: boolean = false;
  submitted: boolean = false;
  constructor(
    public fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  public togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: [''],
    });
  }

  loginUser() {
    this.submitted = true;
    const { username } = this.loginForm.value;
    console.log(this.loginForm.value);
    
    if (this.loginForm.invalid) {
      // errorNotifier(this.snackBar, 'Please provide a valid credentials');
      return;
    }else if(username === 'user@test.com'){
      this.router.navigate(['/dashboard'])
    }else{
      // errorNotifier(this.snackBar, 'Invalid credentials');
    }
  }

  // email: string = '';
  // password: string = '';

  // onSubmit() {
  //   console.log('Email:', this.email);
  //   console.log('Password:', this.password);
  //   // Implement authentication logic here
  // }
}
