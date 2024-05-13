/**
 *        @file auth.ts
 *  @repository 000-a-3100_api_boilerplate
 * @application 000-a-3100_api_boilerplate
 *     @summary AuthValidator Class
 * @description Defines validation structure for auth API requests
 */

import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';

class AuthValidator {
  public  register() {
    return Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      roleId: Joi.number().required(),
      status: Joi.string().required(),
    });
  }
  public login() {
    return Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
  }

  public forgotPassword() {
    return Joi.object({
      username: Joi.string().required(),
    });
  }

  public resetPassword() {
    return Joi.object({
      // phoneNumber: Joi.string().required(),
      password: Joi.string().required(),
    });
  }

  public changePassword() {
    return Joi.object({
      oldPassword: Joi.string().required(),
      newPassword: Joi.string().required(),
    });
  }

  public whoami() {
    return Joi.object({});
  }

  public async validateAuth(req: Request, res: Response, next: NextFunction, validator: any) {
    try {
      if (validator) {
        await validator.validateAsync(req.body);
      }
      return next();
    } catch (error: any) {
      console.log(error);
      
      return res.status(400).send({
        success: false,
        data: { message: error.details[0].message },
      });
    }
  }
}

export default new AuthValidator();
