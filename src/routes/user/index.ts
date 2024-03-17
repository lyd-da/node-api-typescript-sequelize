import express from "express";
import { UserController } from "../../controller/user";
import CheckAuth from "../../middleware/checkAuth";

const router = express.Router();

router.get('/getAllUser',(req, res, next)=>{
    CheckAuth.check(req, res, next);
},  UserController.getAllUser);


export default router;