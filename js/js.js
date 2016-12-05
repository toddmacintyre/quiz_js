//Push results from each question to right and wrong arrays
//Change 'next question' to 'Finish Quiz' on last question
//Add results page
//Add restart quiz button???

//Add total right and wrong array length to button. also add divider at bottom and tally at bottom of drop-down.
//Add jumbotron background.


//Assign variables to the DOM
var questionNumber = document.getElementById("questionNumber");
var question = document.getElementById("question");
var nextButton = document.getElementById("nextButton");
var choices = document.getElementById("choices");

var correct = [];
var incorrect = [];

//Keep track of which question we're on
let q = 0;

var compileResults = function() {

}

var printResults = function() {
	//Clear screen
	var quizModule = document.getElementById('quizModule');
	quizModule.removeChild(quizModule.children[0]);

	//Button is of form // <a class="dropdown-item" href="#">Action</a>
	//Display static information
	quizModule.getElementsByTagName('div')[0].removeAttribute('style');

	//Display correct results tally
	for (let i = 0; i < correct.length; i++) {
		var correctItem = document.createElement('a');
		correctItem.className = "dropdown-item";
		correctItem.innerHTML = "#" + correct[i].qNum + ": " + correct[i].selection;
		document.getElementById('correct').getElementsByTagName('div')[0].appendChild(correctItem);
	}

	//Display incorrect results tally
	for (let i = 0; i < incorrect.length; i++) {
		var incorrectItem = document.createElement('a');
		incorrectItem.className = "dropdown-item";
		incorrectItem.innerHTML = "#" + incorrect[i].qNum + ": " + incorrect[i].selection;
		document.getElementById('incorrect').getElementsByTagName('div')[0].appendChild(incorrectItem);
	}
}


//Create function that updates the information
var loadQuestions = function() {

	if (q === questions.length) {
		printResults();
		//End
		return null;
	}

	while (choices.hasChildNodes()) {
  	choices.removeChild(choices.lastChild);
	}

	//display the question number
	questionNumber.innerHTML = q + 1;

	//display the question text
	question.innerHTML = questions[q].question;

	//load the correct answer
	answerText = questions[q].choices[questions[q].answer];
	answer = questions[q].answer;

	//load the multiple choices
	// <button type="button" class="btn btn-outline-primary">Primary</button>

	for (let i = 0; i < questions[q].choices.length; i++) {
		var choice = document.createElement("button"); // checkbox
		choice.innerHTML = questions[q].choices[i];
		choice.className = "btn btn-outline-primary " + i;
		//Append choice to choices list
		choices.appendChild(choice);
		//Listen for click on choices buttons
		choice.addEventListener("click", verifyAnswer);
	}

	
	




	//increment to the next question
	q++;
}

var verifyAnswer = function() {
	//If click is correct answer, turn box green and tally score
	answerPush = {qNum: q, selection: this.innerHTML, correctSelection: answerText};
	if ( /*this.innerHTML === answer*/ this.classList.item(2) == answer) {
		this.classList.add("btn-success");
		correct.push(answerPush);
	} else {
		//Else, turn box red and tally incorrect
		this.classList.add("btn-danger");
		incorrect.push(answerPush);
	}
	this.classList.remove("btn-outline-primary");
	var button = this;
	disableButtons(button);
}

var disableButtons = function(button) {
	var buttonList = button.parentNode.children;
	for ( let i = 0; i < buttonList.length; i++ ) {
		buttonList[i].disabled = true;
	}
}

// var getChildIndex = function() {
// 	var i = 0;
// 	while( (child = child.previousSibling) != null ) {
// 	  i++;
// 	}
// }


//Create function that updates

var main = function() {
	loadQuestions();
	nextButton.addEventListener("click", loadQuestions);

}

main();



//Call function on page load
//Add listener that calls function on next button click

