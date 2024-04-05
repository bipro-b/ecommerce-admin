import express from 'express';
import {  getUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();



router.get('/:id', verifyToken,getUser);

export default router;