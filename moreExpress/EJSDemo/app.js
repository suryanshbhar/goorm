var express = require("express");
var app = express();

app.use(express.static("public"));
//this will make it clear for express to look for css in public directory.
app.set("view engine","ejs");
//this will make express to expect ejs files only

app.get("/",function(req,res){
	res.render("home");
	res.send("<h1>Welcome to my home-page!!</h1>");
});
app.get("/fallinlovewith/:thing",function(req,res){
	var thing = req.params.thing;
		res.render("love",{thingVar: thing});
});
app.get("/posts",function(req,res){
	var posts=[
		{title: "Post 1",author:"Susy"},
		{title: "Post 2",author:"MAtty"},
		{title: "Post 3",author:"CHarlie"},
	];
	res.render("posts",{posts: posts});
});
app.listen(3000,function(){
	console.log("Server running on port 3000");
});