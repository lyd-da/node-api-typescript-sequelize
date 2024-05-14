import { Request, Response } from "express";
import { User } from "../models/user";


export class UserService{
    public static async getAllUser(req: Request, res:Response){
        try {
           
            return await User.findAll();
        } catch (error) {
            throw { sucess: false, message: 'Error fetching users', statusCode: 400 };
        }
    }
    public static async editUser(req: Request, res:Response){
        try {
           const newUser = req.body;
            return await User.findOrCreate(newUser);
        } catch (error) {
            throw { sucess: false, message: 'Error fetching users', statusCode: 400 };
        }
    }
    public static async deleteUser(req: Request, res:Response){
        try {
           const newUser = req.body;
            return await User.destroy({where:{username: req.body.username}})
        } catch (error) {
            throw { sucess: false, message: 'Error fetching users', statusCode: 400 };
        }
    }
}