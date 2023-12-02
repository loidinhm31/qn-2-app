import { Component, OnInit } from '@angular/core';
import { LoadingController } from "@ionic/angular";
import { AuthenticationService } from "src/app/shared/services/authentication/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // public errorMessage: string;
  username: string | undefined;
  password: string | undefined;

  constructor(private router: Router,
    private authService: AuthenticationService,
    private loadingController: LoadingController
  ) {
  }

  async ngOnInit() {
    console.log("test");
  }

  async login() {
    // Add authentication logic here
    // For simplicity, let's consider a basic check
    if (this.username === 'user' && this.password === 'password') {
      // Navigate to home page on successful login
      this.router.navigate(['/home']);
    } else {
      // Handle invalid login
      alert('Invalid login credentials');
    }
  }

  private async showLoadingIndictator() {
    const loadingIndicator = await this.loadingController.create({
      message: 'Opening login window...',
    });
    await loadingIndicator.present();
    return loadingIndicator;
  }
}
