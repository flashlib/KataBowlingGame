function KataBowlingGame()
{
	var obj = {
		balls: new Array(),
		frames: new Array(),
		
	  score: function() {
	  	var total = 0;
	  	this.makeFrames();
	  	for(var i=0; i < this.frames.length; i++)
		  {
		  	total += this.frames[i].score();
		  }

		  return total; 	  	
	  },
	  
	  makeFrames: function(){
	  	this.frames = new Array();

	  	for(var i=0; i < this.balls.length; i+=2)
		  {	
				 this.frames.push(Frame(this.balls[i],this.balls[i+1],this.balls[i+2]));
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

function Frame(first, sec, bonus) {
  var obj = {
    frame: [first, sec, bonus],
    score: function() {
      if((this.frame[0] + this.frame[1])==10){
        return this.frame[0] + this.frame[1] + this.frame[2];
      }
      else{
        return this.frame[0] + this.frame[1];
      } 
    }
  };
  
  return obj;
}




