function average(scores){
	var total = 0;
	scores.forEach(function(score){
				   total+=score;
				   });
	
	var avg=total/scores.length;
	
	return Math.round(avg);
}

var scores=[10,10,10,10,10,10,10];
console.log("Average For Environmental Science");
console.log(average(scores));