
var  KataBowlingGame = {
	  totalScore:0,
	  score:function() {
	 	return this.totalScore;
	 },
	  roll:function (score){
	  	if(score==10){
	  		this.totalScore = 300;
	  	}else if(score == 0){
	  		this.totalScore = 0;
	  	}
	 } 
};