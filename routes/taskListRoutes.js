const mongoose=require('mongoose');
const path=require("path");
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/webhook",
    {useNewUrlParser:true});
const taskModel=require('../models/taskListModel');
module.exports = (app) => {

    app.get('/', function(req, res){

     taskModel.find({}, function (err , response) {
        if(err)
        {
             console.log("err", err);
             return;
        }
        return res.render('todoList', {
            title:'Task List',
            taskList:response
        });
    });
    });
    app.post('/addTask',function (req, res) {
        taskModel.create({
        description:req.body.description,
            category:req.body.category,
            date:req.body.due_date

        }, function (err, task) {
            if(err){
                console.log("err in creating list");
            }
            else
            {
                return res.redirect('/');
            }
        })
    });
    app.get("/deleteTask", function (req, res) {
        taskModel.findOneAndDelete({
            "description":req.query.description
        }, function (err, response) {
            if(err)
            {
                console.log("Unable to delete");


            }
            return res.redirect('/');
        })
    })








};