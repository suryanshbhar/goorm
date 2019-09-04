var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat",catSchema);

//add a cat

/*var george = new Cat({
	name: "Mrs Norris",
	age: 7,
	temperament: "Evil"
});

george.save(function(err, cat){
	if(err){
	console.log("Something went wrong!!");
	}else{
		console.log("Saved a cat");
		console.log(cat);
	}
});
*/

Cat.create({
	name:"Snow White",
	age: 15,
	temperament: "nice"
},function(err , cat){
if(err){
	console.log(err);
}else{
console.log("added a new cat");
console.log(cat);
}

});
//retrieve all cats
Cat.find({},function(err, cats){
	if(err){
	console.log("oh no ERROR");
	console.log(err);
	} else{
	console.log("ALL THE CATS....");
	console.log(cats);
	}
});
