import Authenticate from "@/Infrastructure/Api/Login/Authenticate";

export class AuthenticateIdentity {
  credentials = {};

  /**
   * @return {boolean}
   */
  constructor(payload) {
    if (typeof payload === "object") {
      this.credentials = payload;
    } else {
      console.error(
        "AuthenticateIdentity payload error:",
        "Wrong datatype argument was passed in the parameter"
      );
      return false;
    }
  }

  async getPayload() {
    const credentials = new Authenticate();
    return credentials.getLoginCredential(this.credentials);
  }
}
