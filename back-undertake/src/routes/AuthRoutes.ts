import * as express from "express";
import { isAuthorized } from "../middleware/auth.middleware";
import { AuthController } from './../controller/AuthController';
import { SettingController } from './../controller/SettingController';

const router = ()=>{

    let authController = new AuthController();
    let settingController = new SettingController();
    
    let router = express.Router()
    router.post('/signin', (req,res) => authController.signin(req,res) )
    router.post('/register', (req,res) => authController.register(req,res) )
    router.put('/settings', isAuthorized , (req,res) => settingController.update(req,res) )
    router.get('/settings', isAuthorized , (req,res) => settingController.get(req,res) )
    
    return router
}

export default router;
