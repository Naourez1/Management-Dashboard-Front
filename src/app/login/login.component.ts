import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first} from 'rxjs/operators';
import { AuthenticationServiceService } from '../authentication/authentication-service.service';
import { TokenStorageServiceService } from '../authentication/token-storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Project Management Dashboard';
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  loginForm: FormGroup;

  constructor(private authenticationService: AuthenticationServiceService, private router: Router, private formBuilder: FormBuilder,
              private tokenStorage: TokenStorageServiceService) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
      this.router.navigateByUrl('/dashboard');
    }
  }

  get formControls() { return this.loginForm.controls; }

  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
    }
    this.authenticationService.login(this.formControls.username.value, this.formControls.password.value)
    .pipe(first()).subscribe(data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUsername(data.username);
      this.tokenStorage.saveAuthorities(data.authorities);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
      this.router.navigateByUrl('/dashboard');
    },
    error => {
      console.log(error);
      this.errorMessage = error.error.message;
      this.isLoginFailed = true;
      this.reloadPage();
    });
  }

  reloadPage() {
    window.location.reload();
  }
}
