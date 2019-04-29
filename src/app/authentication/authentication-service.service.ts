import { Injectable } from '@angular/core';
import { UserControllerService, LoginForm } from '../service';
import { TokenStorageServiceService } from './token-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private loginForm: LoginForm;
  constructor(private userControllerService: UserControllerService, private tokenStorage: TokenStorageServiceService) {}

  login(username: string, password: string) {
    this.loginForm = {username, password};
    return this.userControllerService.loginUsingPOST(this.loginForm);
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
