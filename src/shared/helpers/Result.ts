import LANG from '#/shared/languages/en';

type TSuccessHeadersResponse = {
  success: boolean;
};
type TSuccessResponse = {
  data: any;
  headers: TSuccessHeadersResponse;
  status: number;
  statusText: string;
};

type TSuccessResult = {
  message: string;
  status: number;
  headers: TSuccessHeadersResponse;
  data: any;
};

type TErrorResponseValue = {
  status: number;
};

type TErrorResponse = {
  response: TErrorResponseValue;
  message: string;
};

export type TErrorResult = {
  message: string;
  status: number;
};

const SUCCESS_STATUS = [200, 201];

const STATUS_ERROR_MESSAGE: { [status: number]: string } = {
  412: LANG.ERROR_MESSAGE.COMMON
};

type TResponse = TSuccessResponse | TErrorResponse;

class Result {
  private success = {
    data: undefined,
    message: '',
    status: 0
  };

  private error = {
    message: '',
    status: 0
  };

  private parsedSuccessData: any;

  constructor(options: TResponse) {
    this.parseResult(options);
  }

  public setParsedSuccessData(parsedData: any): void {
    this.parsedSuccessData = parsedData;
  }

  public getSuccessParsedData(): any {
    return this.parsedSuccessData;
  }

  public getSuccessData(): any {
    return this.success.data;
  }

  public isSuccess(): boolean {
    const { status } = this.success;

    return SUCCESS_STATUS.includes(status);
  }

  public getError(): TErrorResult {
    return this.error;
  }

  private parseResult(options: TResponse): void {
    this.error = this.parseError(options as TErrorResponse);
    this.success = this.parseSuccess(options as TSuccessResponse);
  }

  private parseSuccess(options: TSuccessResponse): TSuccessResult {
    const { data, status, statusText, headers } = options;

    return {
      data,
      headers,
      message: statusText,
      status
    };
  }

  private parseError(options: TErrorResponse): TErrorResult {
    const { response = {} as TErrorResponseValue } = options;

    return {
      message:
        STATUS_ERROR_MESSAGE[response.status] || LANG.ERROR_MESSAGE.COMMON,
      status: response.status
    };
  }
}

export default Result;
