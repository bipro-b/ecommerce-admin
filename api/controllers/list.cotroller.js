import List from "../models/listing.model.js"
import { errorHandler } from "../utils/error.js";

export const createListing = async(req,res,next)=>{
    try {

        const listing = await List.create(req.body);
        return res.status(201).json(listing);
        
    } catch (error) {
        next(error)
    }
}

export const getListing = async(req,res,next)=>{
    try {
        const listing = await List.find()
        if(!listing){
            return next(errorHandler(404,'Listing is not found'));
        }
        res.status(200).json(listing);
    } catch (error) {
        next(error)
    }
}

