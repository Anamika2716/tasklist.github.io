const mongoose=require('mongoose');
const taskList=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:
        {
            type:String,
            required:true
        },
    date:
        {  type:Date,
            default:Date.now,
            required:true
        }
});

module.exports=mongoose.model('taskList', taskList);


