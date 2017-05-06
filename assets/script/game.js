//run newGame on (document).ready
$(document).ready(function(){
	newGame();
});

//define all my variables
var wins = 0;
var losses = 0;
var score = 0;
var goal = 0;

//function newGame resets player score to zero, sets random goal number, sets random image values
function newGame() {
	score = 0;
	goal = Math.floor((Math.random() * 102) + 19);
	$(".score").html(score);
	$(".goal").html(goal);
	console.log("goal: " + goal);
//sets random value to each class with a class ".crystal" 
	$(".crystal").each(function() {
		var imgScore = Math.floor((Math.random() *12) +1)
		$(this).attr("score", imgScore);
//need to run .off(click) otherwise image scores from previous rounds will carry over and be added to image score of current round
		$(this).off("click");
		$(this).click(function() {
			score += imgScore;
		    $(".score").html(score);
		    console.log("user score: " + score); 
		    console.log("image value: " + imgScore);
//after every click event run scoreCheck		   
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