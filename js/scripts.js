//Initialize a variable to store user selectios:
var result=""

//Create a function that responds to the user clicking
//any of the quiz answers by changing the question and
//storing the selection in the 'result' variable
$(".answer").click(function() {

	//Switch function evaluates the attribute id of the specific answer clicked on
	//and executes the case matching the answer id
	//Each case appends the answer value (1 for first selection, 2 for second selection) to the result variable so end result can be assessed
	//Each case also hides the current question and shows the next one
	switch($(this).attr('id')) {
		case 'answer-1-1':
		result+="1";
	  $("#question-1").hide("scale", {percent: 0, direction: 'both', origin: ['middle','middle']}, 500);
	  $("#question-2").show(800);
		break;

		case 'answer-1-2':
		result+="2";
	  $("#question-1").hide("scale", {percent: 0, direction: 'both', origin: ['middle','middle']}, 500);
	  $("#question-2").show(800);
		break;

		case 'answer-2-1':
		result+="1";
	  $("#question-2").hide("scale", {percent: 0, direction: 'both', origin: ['middle','middle']}, 500);
	  $("#question-3").show(800);
		break;

		case 'answer-2-2':
		result+="2";
	  $("#question-2").hide("scale", {percent: 0, direction: 'both', origin: ['middle','middle']}, 500);
	  $("#question-3").show(800);
		break;

		case 'answer-3-1':
		result+="1";
		$("#question-3").hide();
	  $("h2").hide();
	  $("h3").hide();
		break;

		case 'answer-3-2':
		result+="2";
		$("#question-3").hide();
	  $("h2").hide();
	  $("h3").hide();
		break;
	}

	//This switch function shows the appropriate quiz result based on the user's result variable 
	switch(result) {
		case "111":
		$("#result-3").show("slide", {direction: 'up'}, 2000);
		break;

		case "112":
		$("#result-5").show("slide", {direction: 'up'}, 2000);
		break;

		case "121":
		$("#result-7").show("slide", {direction: 'up'}, 2000);
		break;

		case "122":
		$("#result-1").show("slide", {direction: 'up'}, 2000);
		break;

		case "211":
		$("#result-2").show("slide", {direction: 'up'}, 2000);
		break;

		case "212":
		$("#result-4").show("slide", {direction: 'up'}, 2000);
		break;

		case "221":
		$("#result-8").show("slide", {direction: 'up'}, 2000);
		break;

		case "222":
		$("#result-6").show("slide", {direction: 'up'}, 2000);
		break;
	}
})
