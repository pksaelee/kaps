// how to start a game
var VisNovel = new Phaser.Game(800, 600, Phaser.Auto, '', 
	{preload: preload, create: create, update: update});

var GameState = {
	preload: function(){
		VisNovel.load.spritesheet("")
	},
var bg;
var main1;
var logo;
var button;

	create: function(){
		VisNovel.stage.backgroundColor = "black";

	},
	function animationStarted(sprite, animation){
	VisNovel.add.text(400,100,"K.A.P.S.", {fill: 'white'});

}

}
	update: function(){

	}
};

VisNovel.state.add("GameState", GameState);
VisNovel.state.start("GameState");

