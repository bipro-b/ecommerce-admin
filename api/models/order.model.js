import { OrderedBulkOperation } from "mongodb";
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    username:{

    },
    productname:{
        type:String,
        required:true,
    },
   
    price:{
        type:Number,
        required:true
    },
    address:{
        type:String
    },
    phone:{
        type:String
    },
    pending:{
        type:Boolean,
        default:false
    }
})

const Order = mongoose.model('Order',OrderSchema);

export default Order;