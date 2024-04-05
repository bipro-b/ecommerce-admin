import { mongoose } from "mongoose";

const userShcema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        uniques:true
    },
    usernumber:{
        type:String,
        required:true,
        uniques:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }

},{timestamps:true})

const User = mongoose.model('User',userShcema);
export default User;