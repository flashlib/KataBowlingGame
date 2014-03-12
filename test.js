



test("all strike", function(){
	var game = KataBowlingGame;
	game.init();
	game.roll(10);
	game.roll(10);
	game.roll(10);
	game.roll(10);
	game.roll(10);
	game.roll(10);
	game.roll(10);
	game.roll(10);
	game.roll(10);	
	game.roll(10);
	game.roll(10);
	game.roll(10);
	ok(300==game.score(), "all strike should equal to 300! Current Value is: " + game.score());
});

test("all false", function(){
	var game = KataBowlingGame;
	game.init();
	game.roll(0);
	game.roll(0);
	game.roll(0);
	game.roll(0);
	game.roll(0);
	game.roll(0);
	game.roll(0);
	game.roll(0);
	game.roll(0);	
	game.roll(0);
	game.roll(0);
	game.roll(0);
	game.roll(0);
	game.roll(0);
	game.roll(0);
	game.roll(0);
	game.roll(0);
	game.roll(0);
	game.roll(0);	
	game.roll(0);	
	ok(0==game.score(), "all false should equal to 0! Current Value is: " + game.score());
});