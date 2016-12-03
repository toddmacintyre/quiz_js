//Push results from each question to right and wrong arrays
//Add results page


//Assign variables to the DOM
var questionNumber = document.getElementById("questionNumber");
var question = document.getElementById("question");
var nextButton = document.getElementById("nextButton");
var choices = document.getElementById("choices");

var correct = [];
var incorrect = [];

//Keep track of which question we're on
let q = 0;





//Create function that updates the information
var loadQuestions = function() {

	if (q === questions.length) {
		console.log('all done');
		return null;
	}

	console.log('loading questions');

	while (choices.hasChildNodes()) {
  	choices.removeChild(choices.lastChild);
	}

	//display the question number
	questionNumber.innerHTML = q + 1;

	//display the question text
	question.innerHTML = questions[q].question;

	//load the correct answer
	answer = questions[q].choices[questions[q].answer];

	//load the multiple choices
	// <button type="button" class="btn btn-outline-primary">Primary</button>

	for (let i = 0; i < questions[q].choices.length; i++) {
		var choice = document.createElement("button"); // checkbox
		choice.innerHTML = questions[q].choices[i];
		choice.className = "btn btn-outline-primary";
		//Append choice to choices list
		choices.appendChild(choice);
		//Listen for click on choices buttons
		choice.addEventListener("click", verifyAnswer);
	}

	
	

	//Else, turn box red and tally incorrect



	//increment to the next question
	q++;
}

var verifyAnswer = function() {
	console.log("clicked: " + this.innerHTML);
	//If click is correct answer, turn box green and tally score
	if ( this.innerHTML === answer ) {
		this.classList.add("btn-outline-success");
	} else {
		this.classList.add("btn-outline-danger");
	}
	this.classList.remove("btn-outline-primary");
	var button = this;
	disableButtons(button);
}

var disableButtons = function(button) {
	console.log('disabling buttons');
	var buttonList = button.parentNode.children;
	console.log(buttonList);
	for ( let i = 0; i < buttonList.length; i++ ) {
		buttonList[i].disabled = true;
	}
}


//Create function that updates

loadQuestions();
nextButton.addEventListener("click", loadQuestions);


//Call function on page load
//Add listener that calls function on next button click

