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
    },
    image:{
        type:String,
        default:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_07/3451045/210218-product-of-the-year-2x1-cs.jpg"
    }
    ,
    offer:{
        type:Boolean,
        default:false
    }
})

const List = mongoose.model('List',listingSchema);

export default List;