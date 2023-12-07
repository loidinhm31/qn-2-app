import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/shared/models/user.model";
import { BehaviorSubject } from "rxjs";
import { StorageService } from "src/app/shared/services/storage/storage.service";
import { HttpClient } from "@angular/common/http";
// @ts-ignore
import * as bcrypt from "bcryptjs";


@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  user = new BehaviorSubject<User | null>(null);

  constructor(private router: Router,
              private storageService: StorageService,
              private http: HttpClient) {
  }

  async login(username: string | number | null | undefined,
              password: string | number | null | undefined) {
    const hashedPassword = await this.hashPassword(password);
    console.log("Hashed Password:", hashedPassword);

    // TODO implement
    await this.comparePasswords(hashedPassword, "$2y$10$7pKzaFibm0M1Z7387WdOFObYEJsLcx6w5NA3s7Nk72LIF3CMxSFZu");
    // this.http.post<any>("TEST_URL", "body")
    //   .subscribe(async () => {
    //
    //   });

    // TODO implement
    const fakeUserData = new User("1", "100200", "ADMIN");

    // Load user
    this.user.next(fakeUserData);

    await this.onLoginSuccess(fakeUserData);
  }

  async onLoginSuccess(userData: User) {
    await this.storageService.setItem("userData", JSON.stringify(userData));

    await this.router.navigate(["/sessions"]);
  }

  async autoLogin() {
    const storedUSer = await this.storageService.getItem("userData");

    if (storedUSer) {
      const userData: {
        id: string;
        username: string;
        role: string;
      } = JSON.parse(storedUSer);
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
  }

  async onLogout() {
    return await this.router.navigate(["login"]);
  }

  private async hashPassword(password: string | number | null | undefined): Promise<string> {
    // Use bcryptjs to hash the password
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  private async comparePasswords(inputtedPassword: string, storedHashedPassword: string): Promise<boolean> {
    // Use bcryptjs to compare the inputted password with the stored hashed password
    return bcrypt.compare(inputtedPassword, storedHashedPassword);
  }
}
