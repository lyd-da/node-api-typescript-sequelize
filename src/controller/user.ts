import { Request, Response } from 'express';
import { UserService } from '../services/user';
import { ResponseWrapper } from '../util/responseWrapper';

export class UserController {
  public static async getAllUser(req: Request, res: Response) {
    try{
      return res.send(ResponseWrapper.success(await UserService.getAllUser(req, res)));

    }catch(error : any){
      return res.status(error.statusCode).send(ResponseWrapper.error(error.statusCode, error.message));

    }
  }
}
