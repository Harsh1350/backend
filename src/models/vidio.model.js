import mongoose ,{Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const vidioSchema=new mongoose.Schema(
    {
        vidioFile:{
            types:String,
            required:true,
        },
        thumbnail:{
            types:String,
            required:true,
        },
        title:{
            types:String,
            required:true,
        },
        description:{
            types:String,
            required:true,
        },
        duration:{
            types:Number,
            required:true,
        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"     
        }

    },{timeStamps:true})


vidioSchema.plugin(mongooseAggregatePaginate)

export const Vidio = mongoose.model("Vidio",vidioSchema) 