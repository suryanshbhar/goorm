var express = require("express");
var app = express();

// hi there
app.get("/",function(req,res){
	res.send("harsh pallav govid pao  chuttad");
	console.log("")
});
app.get("/bye",function(req,res){
	res.send("Goodbye!!!");
})
app.get("/dog",function(req,res){
	console.log("someone made a request");
	res.send("Meow!!!");
});
app.get("/r/:subredditName",function(req,res){
	var subreddit = req.params.subredditName;
	res.send("WELCOME TO THE "+ subreddit.toUpperCase() +" A SUBREDDIT");
});
app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});