test("all 0", function() {
  var game = new KataBowlingGame();
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
  ok(0 == game.score(), "all 0 should equal to 0! Current Value is: " + game.score());
});

test("all 1", function() {
  var game = new KataBowlingGame();
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  ok(20 == game.score(), "all 1 should equal to 20! Current Value is: " + game.score());
});

/*
test("first spare,left 1", function() {
  var game = new KataBowlingGame();
  game.roll(9);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  game.roll(1);
  ok(29 == game.score(), "first spare,left 1 should equal to 29! Current Value is: " + game.score());
});
*/