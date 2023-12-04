import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "src/app/shared/models/user.model";
import { BehaviorSubject } from "rxjs";
import { StorageService } from "src/app/shared/services/storage/storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user = new BehaviorSubject<User | null>(null);

  constructor(private router: Router, private storageService: StorageService) {
  }

  async onLoginSuccess() {
    await this.router.navigate(['/']);
  }

  async autoLogin() {
    const userData: {
      id: string;
      username: string;
      role: string;
    } = JSON.parse(await this.storageService.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.id,
      userData.username,
      userData.role,
    );

    this.user.next(loadedUser);
  }

  async onLogout() {
    return await this.router.navigate(['login']);
  }
}
