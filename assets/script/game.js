//define all my variables

var wins = 0;
var losses = 0;
var score = 0;
var goal = 0;
var crystals = {
	orange : 0,
	purple: 0,
	green: 0,
	blue: 0,
};

//tell jquery to wait until the page is ready before starting to run javascript then run newGame
$(document).ready(function(){
	newGame();

});
//write my functions

/*for new game function 
	-set score to 0 
	-set the random numbers for crystal 
	-set random number for goal
	-keep the wins and losses from past rounds*/



function newGame() {
	score = 0;
	goal = Math.floor((Math.random() * 102) + 19);

	$(".score").html(score);
	$(".goal").html(goal);
	console.log(goal);

	
	$('.crystal').each(function() {
		var imgScore = Math.floor((Math.random() *12) +1)
		$(this).attr('score', imgScore)
		$(this).click(function() {
			score += imgScore;
		    $(".score").html(score);
		    console.log(score); 
		    console.log(imgScore);
		    scoreCheck();
		})
	})
};

function scoreCheck(){
	//declare 2 new vars
	var win = false;
	var lose = false;
	//if score matches goal win is true
	if(score === goal){
		win = true;
		$(".wins").html(wins += 1);
	}
	//if player busts lose is true
	else if(score > goal){
		lose = true;
		$(".losses").html(losses += 1);
	}
	console.log(wins, losses);
	//if either win or lose is true run newGame
	if(win === true || lose === true){
		newGame();
	}
	//maybe run this function after every click event??	
};