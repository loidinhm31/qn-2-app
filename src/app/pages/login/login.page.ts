import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInput, LoadingController } from "@ionic/angular";
import { AuthenticationService } from "src/app/shared/services/authentication/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  @ViewChild("usernameRef") usernameRef!: IonInput;
  @ViewChild("passwordRef") passwordRef!: IonInput;

  password: string | undefined;

  constructor(private authenticationService: AuthenticationService,
              private loadingController: LoadingController,
  ) {
  }

  async ngOnInit() {
    await this.authenticationService.autoLogin();
  }

  async login() {
    const loadingIndicator = await this.showLoadingIndicator();
    try {
      const username = this.usernameRef.value;
      const password = this.passwordRef.value;
      await this.authenticationService.login(username, password);
    } catch (error: any) {
      console.error(error);
    } finally {
      await loadingIndicator.dismiss();
    }
  }

  private async showLoadingIndicator() {
    const loadingIndicator = await this.loadingController.create({
      message: "Authenticating...",
    });
    await loadingIndicator.present();
    return loadingIndicator;
  }
}
