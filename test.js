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
  for (var i = 0; i < 20; i++) {
    game.roll(1);
  }

  ok(20 == game.score(), "all 1 should equal to 20! Current Value is: " + game.score());
});

test("first spare,left 1", function() {
  var game = new KataBowlingGame();
  for (var i = 0; i < 20; i++) {
    if (i == 0) {
      game.roll(9);
    } else {
      game.roll(1);
    }

  }

  ok(29 == game.score(), "first spare,left 1 should equal to 29! Current Value is: " + game.score());
});

test("last spare,left 1", function() {
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
  game.roll(9);
  game.roll(1);
  game.roll(1);
  ok(29 == game.score(), "last spare,left 1 should equal to 29! Current Value is: " + game.score());
});

test("first strike,left 1", function() {
  var game = new KataBowlingGame();
  game.roll(10);
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
  ok(30 == game.score(), "first strike,left 1 should equal to 30! Current Value is: " + game.score());
});

test("last strike,left 1", function() {
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
  game.roll(10);
  game.roll(1);
  game.roll(1);
  ok(30 == game.score(), "last strike,left 1 should equal to 30! Current Value is: " + game.score());
});

test("all strike", function() {
  var game = new KataBowlingGame();
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
  ok(300 == game.score(), "all strike should equal to 300! Current Value is: " + game.score());
});

test("all spare", function() {
  var game = new KataBowlingGame();
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(6);
  game.roll(4);
  game.roll(5);
  ok(151 == game.score(), "all spare should equal to 151! Current Value is: " + game.score());
});

test("mixed spike and spare", function() {
  var game = new KataBowlingGame();
  game.roll(5);
  game.roll(5);
  game.roll(10);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(5);
  game.roll(6);
  game.roll(4);
  game.roll(5);
  ok(161 == game.score(), "mixed spike and spare should equal to 161! Current Value is: " + game.score());
});