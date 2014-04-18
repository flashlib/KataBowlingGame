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
				var frame = Frame(this.balls[j], 
        	this.balls[j + 1], 
        	this.balls[j + 2]);
        this.frames.push(frame);
        
				if(frame.isStrike()) {
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

function Frame(first, sec, third) {
  var obj = {
    frame: [first, sec, third],
    isStrike: function() {
    	return this.frame[0]==10;
    },
    isSpare: function() {
      return (this.frame[0] + this.frame[1]) == 10;
    },
    score: function() {
      var tempScore = this.frame[0] + this.frame[1];
      if (this.isSpare() || this.isStrike()) {
        tempScore += this.frame[2];
      }

			return tempScore;
    }
  };

  return obj;
}

