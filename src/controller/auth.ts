import { Request, Response } from 'express';
import { UserService } from '../services/user';
import { AuthService } from '../services/auth';
import { ResponseWrapper } from '../util/responseWrapper';

export class AuthController {
  public static async register(req: Request, res: Response) {
    try {
    return res.send(ResponseWrapper.success(await AuthService.register(req, res), 'Successfully registered')); 
    } catch (error: any) {
     return res.status(error.statusCode).send(ResponseWrapper.error(error.statusCode, error.message));
    }
  }
  public static async login(req: Request, res: Response) {
    try {
    return res.send(ResponseWrapper.success(await AuthService.login(req, res), 'Successfully logged in')); 
    } catch (error: any) {
     return res.status(error.statusCode).send(ResponseWrapper.error(error.statusCode, error.message));
    }
  }
}
