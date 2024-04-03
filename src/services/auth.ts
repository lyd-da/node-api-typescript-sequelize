import { Request, Response } from 'express';
import { UserService } from '../services/user';
import { hashPassword } from '../util/passwordUtil';
import { User } from '../models/user';
import { UserType } from '../typings/user';
import jwt from "jsonwebtoken";
export class AuthService {
  public static async register(req: Request, res: Response) {
    try {
      const { password, ...data } = req.body;

      const pass = await hashPassword(password);
      const newUser = {
        password: pass,
        ...data,
      };

      const [user, created]: any = await User.create(newUser);
      if (!created) {
        throw { sucess: false, message: "Unable to create user", statusCode: 409 };
      }

      
      
      console.log(user);

      const token = await this.createToken(user);
      return token
    } catch (error) {
      throw { sucess: false, message: "Unable to create user", statusCode: 409 };
    }
  }

  
  static async createToken(user: UserType){
  return  jwt.sign({
      user: user
    }, process.env.SECRET!, { expiresIn: '1h' });
  }
}
