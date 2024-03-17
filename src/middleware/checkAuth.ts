import { NextFunction, Request, Response } from "express";
import jwt from 'njwt'

export default class CheckAuth{

    public static async check(req: Request, res: Response, next: NextFunction) {
        try {
          if (!req.headers.authorization) {
            throw new Error("Unauthorized");
          }
          const token = req.headers.authorization?.split(' ')[1];
          const verifiedToken = jwt.verify(token, process.env.AUTHENTICATION_KEY);
          if (!verifiedToken) {
            throw new Error("Invalid Token");
          }          
        
          return next();
        } catch (error) {
          return res.status(403).send({
            success: false,
            message: error,
            data: {},
          });
        }
    }
}