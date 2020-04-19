import * as Request from "@/Infrastructure/Api/Request";

export interface AuthenticateInterface {
  username: string;
  password: string;
}

export class Authenticate implements AuthenticateInterface {
  static URI = "/user/login/authentication";
  username = "";
  password = "";

  public getLoginCredential(data: any) {
    const params = new URLSearchParams();
    params.append("username", data.username);
    params.append("password", data.password);
    const requestUrl =
      Authenticate.URI +
      "?username=" +
      data.username +
      "&password=" +
      data.password;

    return Request.axiosGet(requestUrl);
  }
}
