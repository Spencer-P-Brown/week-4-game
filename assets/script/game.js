//define all my variables

var wins = 0;
var losses = 0;
var score = 0;
var goal = 0;
var crystals = {
	orange : 0,
	purple: 0,
	green: 0,
	blue:0,
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

	$(".goal").html(goal);
	console.log(goal);
	//still need to assign random number values to crystals object
};

/*Need event listeners on each crystal that updates player score
need a function to check player score, if score === goal add wins += 1, else if score > goal losses +=1
else if score < goal do nothing*/

function scoreCheck(){
	//declare 2 new vars
	var win = false;
	var lose = false;
	//if score matches goal win is true
	if(score === goal){
		win = true;
		$("wins").html(wins += 1);
	}
	//if player busts lose is true
	else if(score > goal){
		lose = true;
		$("losses").html(losses += 1);
	}
	//if either win or lose is true run newGame
	if(win === true || lose === true){
		newGame();
	}
	//maybe run this function after every click event??
};