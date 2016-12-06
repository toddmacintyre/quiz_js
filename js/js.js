
//Add total right and wrong array length to button. also add divider at bottom and tally at bottom of drop-down.



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
	document.getElementsByTagName('body')[0].removeChild( document.getElementsByTagName('footer')[0] ); //Clear Sticky Footer

	//Display static information
	quizModule.getElementsByTagName('div')[0].removeAttribute('style');

	// //Display correct results tally
	// document.getElementById('correctSpan').innerHTML = correct.length;
	// for (let i = 0; i < correct.length; i++) {
	// 	var correctItem = document.createElement('a');
	// 	var menuDivider = document.createElement('div');
	// 	correctItem.className = "dropdown-item";
	// 	correctItem.innerHTML = "#" + correct[i].qNum + ": " + questions[correct[i].qNum - 1].question + "<br>Your Answer: " + correct[i].selection;
	// 	document.getElementById('correct').getElementsByTagName('div')[0].appendChild(correctItem);
	// 	if (i !== correct.length - 1) {
	// 		menuDivider.className = "dropdown-divider";
	// 		document.getElementById('correct').getElementsByTagName('div')[0].appendChild(menuDivider);
	// 	}
	// }

	// //Display incorrect results tally
	// document.getElementById('incorrectSpan').innerHTML = incorrect.length;
	// for (let i = 0; i < incorrect.length; i++) {
	// 	var incorrectItem = document.createElement('a');
	// 	var menuDivider = document.createElement('div');
	// 	incorrectItem.className = "dropdown-item";
	// 	incorrectItem.innerHTML = "#" + incorrect[i].qNum + ": " + questions[incorrect[i].qNum - 1].question + "<br>Your Answer: " + incorrect[i].selection;
	// 	document.getElementById('incorrect').getElementsByTagName('div')[0].appendChild(incorrectItem);
	// 	if (i !== incorrect.length - 1) {
	// 		menuDivider.className = "dropdown-divider";
	// 		document.getElementById('incorrect').getElementsByTagName('div')[0].appendChild(menuDivider);
	// 	}
	// }

	var populateDD = function(c_ic, string) {
		console.log(c_ic);
		whaaa = c_ic;
		//Button is of form // <a class="dropdown-item" href="#">Action</a>
		document.getElementById(string + "Span").innerHTML = c_ic.length;
		for (let i = 0; i < c_ic.length; i++) {
			var c_icItem = document.createElement('a');
			var menuDivider = document.createElement('div');
			c_icItem.className = "dropdown-item";
			c_icItem.innerHTML = "#" + c_ic[i].qNum + ": " + questions[c_ic[i].qNum - 1].question + "<br>Your Answer: " + c_ic[i].selection;
			document.getElementById(string).getElementsByTagName('div')[0].appendChild(c_icItem);
			if (i !== c_ic.length - 1) {
				menuDivider.className = "dropdown-divider";
				document.getElementById(string).getElementsByTagName('div')[0].appendChild(menuDivider);
			}
		}
	}

	populateDD(correct, 'correct');
	populateDD(incorrect, 'incorrect');
}




//Create function that updates the information
var loadQuestions = function() {

	nextButton.disabled = true;
	nextButton.classList.remove("btn-primary");
	nextButton.classList.add("btn-info");

	if (q === questions.length) {
		printResults();
		//End
		return null;
	}

	while (choices.hasChildNodes()) {
  	choices.removeChild(choices.lastChild);
	}

	//display the question number
	questionNumber.innerHTML = q + 1 + "  (of " + questions.length + ")";

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

	//Check if quiz finished
	console.log(q);
	if (q === questions.length) {
		nextButton.innerHTML = "Finish Quiz";
	}
}

var verifyAnswer = function() {
	//If click is correct answer, turn box green and tally score
	answerPush = {qNum: q, selection: this.innerHTML, correctSelection: answerText};
	if (this.classList.item(2) == answer) {
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
	//Enable nextButton
	nextButton.disabled = false;
	nextButton.classList.remove("btn-info");
	nextButton.classList.add("btn-primary");
}

//Main Program
var main = function() {
	loadQuestions();
	nextButton.addEventListener("click", loadQuestions);
}

main();
