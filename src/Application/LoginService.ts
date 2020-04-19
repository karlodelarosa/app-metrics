// import bcrypt from "bcryptjs";
import { Authenticate } from "@/Infrastructure/Api/Login/Authenticate";
import { Response } from "@/Infrastructure/Api/Response";

export interface LoginServiceInterface {
  username: string;
  password: string;
}

export class LoginService implements LoginServiceInterface {
  static PASSWORD_KEY = "23b894e82c1a7cf90971bfe74e2895b4981e3a2c";
  static ERROR_MESSAGES = {
    PASSWORD_MIN_LENGTH: 6,

    USERNAME_EMPTY: "Username cannot be empty",
    PASSWORD_EMPTY: "Password cannot be empty",
    PASSWORD_LENGTH_ERROR: "Invalid password length"
  };

  username = "";
  password = "";

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  public async validate(): Promise<any> {
    const auth = new Authenticate();
    // const hashedPassword = await this.passwordHash(this.password);
    const data = await auth.getLoginCredential(
      Object.freeze({
        username: this.username,
        password: this.password
      })
    );

    const response = new Response(data);
    if (response.isOk()) {
      return new Promise<any>(resolve => {
        resolve(response.getData());
      });
    }
  }

  // protected passwordHash(password: string) {
  //   return bcrypt.hash(password, 10);
  // }
}
