export interface ResponseFormatterInterface {
  apiResponse: {
    data: {
      sucess: boolean;
      message: string;
    };
    status: number;
  };
}

export class Response {
  apiResponse = {
    data: {
      sucess: false,
      message: ""
    },
    status: 0
  };

  static API_SUCCESS_CODE = 200;

  public constructor(response: any) {
    this.apiResponse = response;
  }

  public isOk() {
    return this.apiResponse.status === Response.API_SUCCESS_CODE;
  }

  public getData() {
    return this.apiResponse.data;
  }
}
