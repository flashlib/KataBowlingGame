function KataBowlingGame()
{
	var obj = {
		balls: new Array(),
		scores: new Array(),
	  score: function() {
	  	var total = 0;
	  	this.calculate();
	  	for(var i=0; i < this.scores.length; i++)
		  {
		  	total += this.scores[i];
		  }
		  	
		  
		  return total; 	  	
	  },
	  
	  calculate: function(){
	  	for(var i=0; i < this.balls.length; i++)
		  {
		  	this.scores.push(this.balls[i]);
		  }
	  },
	  
	  roll: function(score) {
	  	this.balls.push(score);
	  }
	}; 
	
	return obj;
}
