import express from 'express'
import {createOrder, getOrder } from '../controllers/order.controller.js';
// import { verifyToken } from '../utils/verifyUser.js';
const router  = express.Router();


router.get("/get",getOrder);
router.post('/create',createOrder);


export default router;