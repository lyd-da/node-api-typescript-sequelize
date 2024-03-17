import { Request, Response } from "express";
import { UserService } from "../services/user";


export class UserController{

    public static async getAllUser(req: Request, res: Response) {
         await UserService.getAllUser(req, res);
      }

}

