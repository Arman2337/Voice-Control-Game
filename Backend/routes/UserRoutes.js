import express from 'express';
import userAuth from '../middleware/userAuth.js';
import { getUserData } from '../controllers/UserController.js';


const UserRouter = express.Router()




UserRouter.get('/data', userAuth, getUserData)

 







export default UserRouter;