import express from "express";
import { UserController } from "../../controller/user";
import CheckAuth from "../../middleware/checkAuth";
import AuthValidator from "../../validator/auth";

const router = express.Router();

router.get('/register', (req, res, next)=>{
    AuthValidator.validateAuth(req, res, next, AuthValidator.register);
}, UserController.getAllUser);


export default router;