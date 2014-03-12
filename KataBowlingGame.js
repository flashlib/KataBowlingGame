
var  KataBowlingGame = {
	  totalScore:0,
	  prevScore:0,
	  prevPrevScore:0,
	  num : 1,
	  score:function() {
	 	return this.totalScore;
	 },
	 init:function (){
	 	this.totalScore = 0;
	 	this.prevScore = 0;
	 	this.prevPrevScore = 0;
	 	this.num = 1;
	 },
	 
	 roll:function (score){
	  	this.totalScore = this.totalScore + score;
	  	if (this.prevScore == 10 && this.num <= 10) {
	  		this.totalScore = this.totalScore + score;
	  	}
	  	
	  	if (this.prevPrevScore == 10 && this.num <= 10) {
	  		this.totalScore = this.totalScore + score;
	  	}
	  	
	  	this.prevPrevScore = this.prevScore;
	  	this.prevScore = score;
	  	this.num = this.num + 1;
	 } 
};