



test("all strike", function(){
	var game = KataBowlingGame;
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
	
	ok(300==game.score(), "all strike should equal to 300!");
});