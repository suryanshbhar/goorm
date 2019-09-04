var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

var campgrounds=[
		{name:"Salmon Creek",image:"https://www.nps.gov/shen/planyourvisit/images/20170712_A7A9022_nl_Campsites_BMCG_960.jpg?maxwidth=1200&maxheight=1200&autorotate=false"},
		{name:"Granie Hill",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMkK3-MAKIgfxPjqZoqEfMEmNE997k7KLHZN5zrg9saQhUoMr"},
		{name: "Rest Salmon",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1AL_DqMgVgyXIdaYRKiMuK215n8eM4TX_v39ltS4KkzjfrLwivA"},
	{name:"Salmon Creek",image:"https://www.nps.gov/shen/planyourvisit/images/20170712_A7A9022_nl_Campsites_BMCG_960.jpg?maxwidth=1200&maxheight=1200&autorotate=false"},
		{name:"Granie Hill",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMkK3-MAKIgfxPjqZoqEfMEmNE997k7KLHZN5zrg9saQhUoMr"},
		{name: "Rest Salmon",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1AL_DqMgVgyXIdaYRKiMuK215n8eM4TX_v39ltS4KkzjfrLwivA"},
	{name:"Salmon Creek",image:"https://www.nps.gov/shen/planyourvisit/images/20170712_A7A9022_nl_Campsites_BMCG_960.jpg?maxwidth=1200&maxheight=1200&autorotate=false"},
		{name:"Granie Hill",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMkK3-MAKIgfxPjqZoqEfMEmNE997k7KLHZN5zrg9saQhUoMr"},
		{name: "Rest Salmon",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1AL_DqMgVgyXIdaYRKiMuK215n8eM4TX_v39ltS4KkzjfrLwivA"}
];

app.get("/",function(req,res){
res.render("landing");
});

app.get("/campgrounds",function(req,res){
	
	
	res.render("campgrounds",{campgrounds: campgrounds});
});

app.post("/campgrounds",function(req,res){
	//get data from form add to array and then redirect
	var name = req.body.name;
	var image =req.body.image;
	var newCampground={name: name,image: image};
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res){
	res.render("new");
});

app.listen(3000,function(){
	console.log("The YelpCamp server is running!");
});