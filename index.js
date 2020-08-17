const express=require("express");
const mongoose=require('mongoose');
const path=require("path");
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/webhook",
    {useNewUrlParser:true});
const taskModel=require("./models/taskListModel");
const app=express();
const routes = require('./routes/taskListRoutes');
const port=8000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

app.use('/assets', express.static('assets'));

//routes for all actions
routes(app);

//starting the port
app.listen(port, function(err){
    if(err)
    {
        console.log("err in running port", port);
    }
    else
        console.log("Running on port", port);
});
module.exports=app;