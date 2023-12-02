import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router ) {
  }

  async onLoginSuccess() {
    await this.router.navigate(['/']);
  }

  async onLogout() {
    return await this.router.navigate(['login']);
  }
}
