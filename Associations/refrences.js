var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2",{useNewUrlParser: true});

var Post = require("./models/post");
var User = require("./models/user");
//create post and associate to user
Post.create({
	title:"How to cook Burger pt.4",
	content:"sadfjasdfhjsdfjdsAAAAAAAAAAAAAAAfhjdf"
},function(err,post){
	User.findOne({email:"bob@gmail.com"},function(err, foundUser){
		if(err){
		console.log(err);
		}else{
		foundUser.posts.push(post);
		foundUser.save(function(err,data){
			if(err){
				console.log(err);
		}else{
			console.log(data);
		}
		});
		}
});
});
//Find User
/*
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err,user){
	if(err){
		console.log(err);
	}else{
		console.log(user);
	}
});*/
