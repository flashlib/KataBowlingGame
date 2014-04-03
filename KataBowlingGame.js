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
	  	this.scores = new Array();

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

function  MakeFrames(balls){
		
		var frames = new Array() ;
		for (var i = 0; i < balls.length; i++) {
				if (balls[i] === 10) {
						frames.push(new Frame(balls[i], 999)) ;								
				}
				else {
						frames.push(new Frame(balls[i],balls[i++])) ;					
				}
		}
		return frames ;
}

function Frame(first, sec) {
		var frame = new Array() ;
		frame = [first, sec] ;
		return frame ;
}




