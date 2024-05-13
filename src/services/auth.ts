import { Request, Response } from 'express';
import { UserService } from '../services/user';
import { hashPassword } from '../util/passwordUtil';
import { User } from '../models/user';
import { UserType } from '../typings/user';
import jwt from 'jsonwebtoken';
export class AuthService {
  public static async register(req: Request, res: Response) {
    try {
      console.log('here');

      const { password, ...data } = req.body;

      const pass = await hashPassword(password);
      if (!pass) {
        throw { sucess: false, message: 'Unable to create user', statusCode: 409 };
      }
      const newUser = {
        password: pass,
        ...data,
      };

      const user = await User.create(newUser);
      console.log(user.dataValues);

      if (!user) {
        throw { sucess: false, message: 'Unable to create user', statusCode: 409 };
      }

      const token = await this.createToken(user.dataValues as UserType);
      return token;
    } catch (error) {
      console.log(error);

      throw { sucess: false, message: 'Unable to create user', statusCode: 409 };
    }
  }
  public static async login(req: Request, res: Response) {
    try {
      const user = await User.findOne({ where: { username: req.body.username } });
      if (!user) {
        throw { sucess: false, message: 'User not found', statusCode: 400 };
      }
      const token = await this.createToken(user.dataValues as UserType);
      return token;
    } catch (error) {

      throw { sucess: false, message: 'User not found', statusCode: 400 };
    }
  }

  static async createToken(user: UserType) {
    return jwt.sign(user, process.env.SECRET!, { expiresIn: '1h' });
  }
}
