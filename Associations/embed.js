var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo",{useNewUrlParser: true});
//POST - title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String,
});
var Post = mongoose.model("Post",postSchema);


//User - email,name
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});

var User= mongoose.model("User",userSchema);

/*
var newUser = new User({
	email:"hermione@ginger.edu",
	name:"Hermione Granger"
});

newUser.posts.push({
	title:"How To Brew polyjuice potion",
	content:"Just kidding!Go to potions class"
})

newUser.save(function(err,user){
	if(err){
	consle.log(err);
	}else{
		console.log(user);
	}
})


var newPost = new Post({
	title:"Reflection son Apples",
	content: "They are delicious"
});

newPost.save(function(err,post){
if(err){
	console.log(err);
}else{
console.log(post);
}	  
 });
*/
User.findOne({name:"Hermione Granger"},function(err,user){
if(err){
	console.log(err);
}else{
	console.log(user);
}
});


