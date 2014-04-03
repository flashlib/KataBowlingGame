function KataBowlingGame()
{
	var obj = {
		balls: new Array(),
		frames: new Array(),
	  score: function() {
	  	var total = 0;
	  	this.calculate();
	  	for(var i=0; i < this.frames.length; i++)
		  {
		  	total += this.frames[i].score();
		  }
	
		  return total; 	  	
	  },
	  
	  calculate: function(){
	  	this.frames = new Array();

	  	for(var i=0; i < this.balls.length; i++)
		  {	
				 this.frames.push(Frame(this.balls[i],this.balls[i++]));
		  }		  
	  },
	  
	  roll: function(score) {
	  	this.balls.push(score);
	  }
	}; 
	
	return obj;
}

// function  MakeFrames(balls){
// 		
		// var frames = new Array() ;
		// for (var i = 0; i < balls.length; i++) {
				// if (balls[i] === 10) {
						// frames.push(new Frame(balls[i], 999)) ;								
				// }
				// else {
						// frames.push(new Frame(balls[i],balls[i++])) ;					
				// }
		// }
		// return frames ;
// }

function Frame(first, sec) {

  var obj = {
    frame: [first, sec],
    score: function() {
      return this.frame[0] + this.frame[1];
    }
  };
  return obj;
}




