import express from 'express'
import { createListing,getListById,getListing } from '../controllers/list.cotroller.js';
// import { verifyToken } from '../utils/verifyUser.js';
const router  = express.Router();

router.get('/:id',getListById);
router.get("/",getListing);
router.post('/create',createListing);


export default router;