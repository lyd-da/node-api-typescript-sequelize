import { Request, Response } from "express";
import { UserService } from "../services/user";
import { AuthService } from "../services/auth";
import { ResponseWrapper } from "../util/responseWrapper";


export class AuthController{

    public static async register(req: Request, res: Response) {
        try {
         
         ResponseWrapper.success(await AuthService.register(req, res), "Successfully registered")
        } catch (error : any) {
           ResponseWrapper.error(error.statusCode, "An error occured")
        }
      }

}

