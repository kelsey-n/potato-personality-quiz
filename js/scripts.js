//Initialize a variable to store user selectios:
var result=""

//Create a function that responds to the user clicking
//any of the quiz answers by changing the question and
//storing the selection in the 'result' variable
$(".answer").click(function() {

	if($(this).attr('id')=='answer-1-1'){result+="1";
  $("#question-1").hide("scale", {percent: 0, direction: 'both', origin: ['middle','middle']}, 500);
  $("#question-2").show(800)}
  if($(this).attr('id')=='answer-1-2'){result+="2";
  $("#question-1").hide("scale", {percent: 0, direction: 'both', origin: ['middle','middle']}, 500);
  $("#question-2").show(800)}
  if($(this).attr('id')=='answer-2-1'){result+="1";
  $("#question-2").hide("scale", {percent: 0, direction: 'both', origin: ['middle','middle']}, 500);
  $("#question-3").show(800)}
  if($(this).attr('id')=='answer-2-2'){result+="2";
  $("#question-2").hide("scale", {percent: 0, direction: 'both', origin: ['middle','middle']}, 500);
  $("#question-3").show(800)}
  if($(this).attr('id')=='answer-3-1'){result+="1";
  $("#question-3").hide();
  $("h2").hide();
  $("h3").hide()}
  if($(this).attr('id')=='answer-3-2'){result+="2";
  $("#question-3").hide();
  $("h2").hide();
  $("h3").hide()}

  if(result=="111"){$("#result-3").show("slide", {direction: 'up'}, 2000)}
  if(result=="112"){$("#result-5").show("slide", {direction: 'up'}, 2000)}
  if(result=="121"){$("#result-7").show("slide", {direction: 'up'}, 2000)}
  if(result=="122"){$("#result-1").show("slide", {direction: 'up'}, 2000)}
  if(result=="211"){$("#result-2").show("slide", {direction: 'up'}, 2000)}
  if(result=="212"){$("#result-4").show("slide", {direction: 'up'}, 2000)}
  if(result=="221"){$("#result-8").show("slide", {direction: 'up'}, 2000)}
  if(result=="222"){$("#result-6").show("slide", {direction: 'up'}, 2000)}
  })
