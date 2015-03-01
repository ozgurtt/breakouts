ig.module('game.games.level-setups').defines(function() {
	var r = 'red';
	var b = 'blue';
	var o = 'orange';
	var g = 'green';
	var X = null;

	ig.LevelSetups = [
		{
			name: "letsa begin",
			bricks: [
				[X,X,g,o,g,X,X],
				[o,b,g,g,g,b,o],
				[X,b,b,b,b,b,X]
			]
		},
		{
			name: "how's it going?",
			bricks: [
				[X,g,o,g,o,g,X],
				[X,b,b,b,b,b,X],
				[g,b,r,b,r,b,g],
				[g,b,b,b,b,b,g],
				[g,b,X,X,X,b,g],
				[X,b,b,b,b,b,X]
			]
		},
		{
			name: 'tie fighta!',
			bricks: [
				[X,b,X,g,X,b,X],
				[b,X,b,o,b,X,b],
				[b,g,b,o,b,g,b],
				[b,X,b,o,b,X,b],
				[X,b,X,X,X,b,X],
				[r,X,r,X,r,X,r]
			]
		},
		{
			name: 'swirl',
			bricks: [
				[r,g,o,b,r,g,o],
				[b,X,X,X,X,X,X],
				[o,X,o,b,r,g,o],
				[g,X,g,X,X,X,b],
				[r,X,r,X,r,X,r],
				[b,X,b,o,g,X,g],
				[o,X,X,X,X,X,o],
				[g,r,b,o,g,r,b]
			]
		}
	];


});
