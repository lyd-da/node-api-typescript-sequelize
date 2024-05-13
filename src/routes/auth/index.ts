import express from "express";
import { UserController } from "../../controller/user";
import CheckAuth from "../../middleware/checkAuth";
import AuthValidator from "../../middleware/validator/auth";
import { AuthController } from "../../controller/auth";

const router = express.Router();

router.post('/register', (req, res, next)=>{

    
    AuthValidator.validateAuth(req, res, next, AuthValidator.register());
}, AuthController.register);
router.post('/login',(req, res, next)=>{

    
  AuthValidator.validateAuth(req, res, next, AuthValidator.login());
},   AuthController.login);


export default router;