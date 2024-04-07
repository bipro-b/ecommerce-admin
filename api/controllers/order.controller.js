import Order from "../models/order.model.js"
import { errorHandler } from "../utils/error.js";

export const createOrder = async(req,res,next)=>{
    try {

        const order = await Order.create(req.body);
        return res.status(201).json(order);
        
    } catch (error) {
        next(error)
    }
}

export const getOrder = async(req,res,next)=>{
    try {
        const orders = await Order.find()
        if(!orders){
            return next(errorHandler(404,'Order is not found'));
        }
        res.status(200).json(orders);
    } catch (error) {
        next(error)
    }
}

