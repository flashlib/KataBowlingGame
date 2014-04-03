function KataBowlingGame()
{
	var obj = {
		scores: new Array(),
	  score: function() {
	  	var total = 0;
		  for(var i=0; i < this.scores.length; i++)
		  {
		  	total += this.scores[i];
		  }
		  return total; 	  	
	  },
	
	  roll: function(score) {
	  	this.scores.push(score);
	  }
	}; 
	
	return obj;
}
