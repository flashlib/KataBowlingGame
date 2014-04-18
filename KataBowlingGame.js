function KataBowlingGame() {
  var obj = {
    balls: new Array(),
    frames: new Array(),

    score: function() {
      var total = 0;
      this.makeFrames();
      for (var i = 0; i < this.frames.length; i++) {
        total += this.frames[i].score();
      }

      return total;
    },

    makeFrames: function() {
      this.frames = new Array();

      for (var i = 0, j = 0; i < 10; i++) {
      /*
      	if(this.frames.length==10){
      		break;
      	}
				if(this.balls[i]==10) {
					i=i+1;
				} 
				else 
				{
					i=i+2;
				}
				*/
				
        this.frames.push(
        	Frame(this.balls[j], 
        	this.balls[j + 1], 
        	this.balls[j + 2]));
        
				if(this.balls[j]==10) {
 					j = j + 1;
      	}
      	else {
      		j = j + 2;
      	}
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
    isStrike: function() {
    	return this.frame[0]==10;
    },
    isSpare: function() {
      return (this.frame[0] + this.frame[1]) == 10;
    },
    score: function() {
    	if (this.isStrike()) {
    		return this.frame[0] + this.frame[1] + this.frame[2];
    	}
      if (this.isSpare()) {
        return this.frame[0] + this.frame[1] + this.frame[2];
      } else {
        return this.frame[0] + this.frame[1];
      }
    }
  };

  return obj;
}

