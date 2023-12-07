import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { AuthenticationService } from "src/app/shared/services/authentication/authentication.service";
import { Router } from "@angular/router";
import { IonInput } from '@ionic/angular';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  @ViewChild("usernameRef") usernameRef!: IonInput;
  @ViewChild("passwordRef") passwordRef!: IonInput;

  password: string | undefined;

  constructor(private router: Router,
              private authService: AuthenticationService,
              private loadingController: LoadingController,
  ) {
  }

  async ngOnInit() {
    console.log("");
  }

  async login() {
    const loadingIndicator = await this.showLoadingIndictator();
    try {
      const username = this.usernameRef.value;
      const password = this.passwordRef.value;
      await this.authService.login(username, password);
    } catch (error: any) {
      console.error(error);
    } finally {
      await loadingIndicator.dismiss();
    }
  }

  private async showLoadingIndictator() {
    const loadingIndicator = await this.loadingController.create({
      message: "Opening login window...",
    });
    await loadingIndicator.present();
    return loadingIndicator;
  }
}
