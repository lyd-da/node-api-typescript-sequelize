export class ResponseWrapper<T> {
  statusCode: number;
  message: string | null;
  data: T | null;
  error: string | null;

  constructor(
    statusCode: number,
    message: string | null = null,
    data: T | null = null,
    error: string | null = null,
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.error = error;
  }

  static success<T>(data: T, message = ''): ResponseWrapper<T> {
    return new ResponseWrapper<T>(200, message, data);
  }

  static error(statusCode: number, message: string): ResponseWrapper<any> {
    return new ResponseWrapper<any>(statusCode, message);
  }
}
