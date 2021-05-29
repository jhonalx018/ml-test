import {
  StatusCodes,
} from 'http-status-codes';

export default class ExceptionApi {
    message: string = '';

    error: any | undefined;

    statusCode: StatusCodes | undefined

    constructor(
      message: string,
      error: any, statusCode:
      StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR,
    ) {
      this.message = message;
      this.error = error;
      this.statusCode = statusCode;
    }
}
