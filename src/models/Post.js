import mongoose from "mongoose";
const { Schema } = mongoose;
const postSchema = new Schema({
  title:{
    type:String,
    require:true
  },
  desc:{
    type:String,
    require:true
  },
  
  img:{
    type:String,
    require:true
  },
  
  content:{
    type:String,
    require:true
  },
},
{timestamps:true}
)
//If the Post collection does not exist create a new one.
export default mongoose.models.Post || mongoose.model("Post", postSchema)