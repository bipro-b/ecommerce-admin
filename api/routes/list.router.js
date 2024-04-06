import express from 'express'
import { createListing,getListing } from '../controllers/list.cotroller.js';
// import { verifyToken } from '../utils/verifyUser.js';
const router  = express.Router();


router.get("/get",getListing);
router.post('/create',createListing);


export default router;