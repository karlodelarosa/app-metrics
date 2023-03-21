export interface ResponseFormatterInterface {
  // apiResponse: {
  //   data: {
  //     sucess: boolean;
  //     message: string;
  //   };
  //   status: number;
  // };
  apiResponse: object;
}

export class Response {
  apiResponse = {};

  static API_SUCCESS_CODE = 200;

  public constructor(response: object) {
    this.apiResponse = response;
  }

  public isOk() {
    return this.apiResponse.status === Response.API_SUCCESS_CODE;
  }

  public getData() {
    return this.apiResponse.data;
  }
}
