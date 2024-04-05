import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
    ,
    offer:{
        type:Boolean,
        default:false
    }
})

const List = mongoose.model('List',listingSchema);

export default List;