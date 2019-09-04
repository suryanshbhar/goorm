var express    = require('express');
var app        = express();
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");


mongoose.connect("mongodb://localhost:27017/yelp_camp",{useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var Campground = mongoose.model("Campground",campgroundSchema);

Campground.create({name:"Granite Hill",
				   image:"https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg",
				  description:"This is a huge granite hill, no bathrooms, No water , Beautiful granite!"}
	,function(err,campground){
		if(err){
	console.log(err);
		} else{
console.log("NEWLY CREATED CAMPGROUND");
		console.log(campground);
		}
	}
);


app.get("/",function(req,res){
res.render("home");
});

app.get("/campgrounds",function(req,res){
	//res.render("campgrounds",{campgrounds: campgrounds});
	Campground.find({},function(err,allcampgrounds){
		if(err){
		console.log(err);
		}
		else{
		res.render("index",{campgrounds:allcampgrounds})
		}
})
});

app.post("/campgrounds",function(req,res){
	//get data from form add to array and then redirect
	var name = req.body.name;
	var image =req.body.image;
	var description=req.body.description;
	var newCampground={name: name,image: image,description: description};
	//campgrounds.push(newCampground);
	//create new campground and save to DB
	Campground.create(newCampground,function(err,newlyCreated){
		if(err){
			console.log(err);
		} else{
			res.redirect("/campgrounds");
		}
	});
});

app.get("/campgrounds/new",function(req,res){
	res.render("new");
});

app.get("/campgrounds/:id",function(req,res){
	Campground.findById(req.params.id,function(err,foundCampground){
		if(err){
			console.log(err);
		}else{
			res.render("show",{fcampground: foundCampground});
		}
	});
	
});


app.listen(3000,function(){
	console.log("The YelpCamp server is running!");
});