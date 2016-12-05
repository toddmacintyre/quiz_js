const questions = [
	{
		question: "What is null?",
		choices: [
							"object",
							"primitive data value",
							"string",
							"boolean"
							],
		answer: 1
	},
	{
		question: "What is an advantage of asynchronous programming?",
		choices: [
							"A call to some unit of functionality triggers an action that is allowed to continue outside of the ongoing flow of the program",
							"The document follows its normal flow of the program",
							"There are no advantages"
							],
		answer: 0
	},
	{
		question: "What does 'TDD' mean in programming?",
		choices: [
							"Try doin' dat",
							"Test Driven Development",
							"Testing Dumb Data",
							"Todd's Disco Day"
							],
		answer: 1
	},
	{
		question: "What is the latest version of JavaScript (as of Dec, 2016)?",
		choices: [
							"JavaScript 7th Edition",
							"ECMAScript 2016",
							"ES7",
							"All of the above"
							],
		answer: 3
	},
	{
		question: "Inside which HTML element tag does JavaScript go?", //Error
		choices: [
							"&ltscripting&gt;",
							"&ltscript&gt;",
							"&ltjavascript&gt;",
							"&ltjs&gt;"
							],
		answer: 1
	},
	{
		question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
		choices: [
							'document.getElementByName("p").innerHTML = "Hello World!";',
							'document.getElementById("demo").innerHTML = "Hello World!";',
							'#demo.innerHTML = "Hello World!";',
							'document.getElement("p").innerHTML = "Hello World!";'
							],
		answer: 1
	},
	{
		question: "Where is the correct place to insert a JavaScript?",
		choices: [
							"Both the &lthead&gt section and the &ltbody&gt section are correct",
							"The &ltbody&gt section",
							"The &lthead&gt section"
							],
		answer: 0
	},
	{
		question: 'What is the correct syntax for referring to an external script called "xxx.js"?', //Error
		choices: [
							'&ltscript name="xxx.js"&gt',
							'&ltscript href="xxx.js"&gt',
							'&ltscript src="xxx.js"&gt'
							],
		answer: 2
	},
	{
		question: "The external JavaScript file must contain the <script> tag.", //Error
		choices: [
							"True",
							"False"
							],
		answer: 1
	},
	{
		question: 'How do you write "Hello World" in an alert box?',
		choices: [
							'msgBox("Hello World");',
							'msg("Hello World");',
							'alertBox("Hello World");',
							'alert("Hello World");'
							],
		answer: 3
	},
	{
		question: 'How do you create a function in JavaScript?',
		choices: [
							'function:myFunction()',
							'function = myFunction()',
							'function myFunction()'
							],
		answer: 2
	},
	{
		question: 'How do you call a function named "myFunction"?',
		choices: [
							'myFunction()',
							'call function myFunction()',
							'call myFunction()'
							],
		answer: 0
	},
	{
		question: 'How to write an IF statement in JavaScript?',
		choices: [
							'if i = 5',
							'if i = 5 then',
							'if (i == 5)',
							'if i == 5 then'
							],
		answer: 2
	},
	{
		question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
		choices: [
							'if (i != 5)',
							'if i =! 5 then',
							'if i &lt&gt 5',
							'if (i &lt&gt 5)'
							],
		answer: 0
	},
	{
		question: 'How does a WHILE loop start?', //Error
		choices: [
							'while (i &lt= 10)',
							'while i = 1 to 10',
							'while (i &lt= 10; i++)'
							],
		answer: 0
	},
	{
		question: 'How does a FOR loop start?',
		choices: [
							'for (i = 0; i &lt= 5)',
							'for (i = 0; i &lt= 5; i++)',
							'for i = 1 to 5',
							'for (i &lt= 5; i++)'
							],
		answer: 1 //Error
	},
	{
		question: 'How can you add a comment in a JavaScript?',
		choices: [
							"'This is a comment",
							'&lt!--This is a comment--&gt', //Error
							'//This is a comment'
							],
		answer: 2
	},
	{
		question: 'How to insert a comment that has more than one line?',
		choices: [
							"//This comment has<br>more than one line//",
							"/*This comment has<br>more than one line*/",
							"&lt!--This comment has<br>more than one line--&gt"
							],
		answer: 1
	},
	{
		question: 'What is the correct way to write a JavaScript array?',
		choices: [
							'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
							'var colors = (1:"red", 2:"green", 3:"blue")',
							'var colors = "red", "green", "blue"',
							'var colors = ["red", "green", "blue"]'
							],
		answer: 3
	},
	{
		question: 'How do you round the number 7.25, to the nearest integer?',
		choices: [
							'Math.rnd(7.25)',
							'round(7.25)',
							'rnd(7.25)',
							'Math.round(7.25)'
							],
		answer: 3
	},
	{
		question: 'How do you find the number with the highest value of x and y?',
		choices: [
							'ceil(x, y)',
							'top(x, y)',
							'Math.ceil(x, y)',
							'Math.max(x, y)'
							],
		answer: 3
	},
	{
		question: 'What is the correct JavaScript syntax for opening a new window called "w2" ?',
		choices: [
							'w2 = window.open("http://www.w3schools.com");',
							'w2 = window.new("http://www.w3schools.com");'
							],
		answer: 0
	},
	{
		question: 'JavaScript is the same as Java.',
		choices: [
							'False',
							'True'
							],
		answer: 0
	},
	{
		question: "How can you detect the client's browser name?",
		choices: [
							'client.navName',
							'browser.name',
							'navigator.appName'
							],
		answer: 2
	},
	{
		question: 'Which event occurs when the user clicks on an HTML element?',
		choices: [
							'onchange',
							'onmouseclick',
							'onclick',
							'onmouseover'
							],
		answer: 2 //????????double check
	},
	{
		question: 'How do you declare a JavaScript variable?',
		choices: [
							'v carName;',
							'variable carName;',
							'var carName;'
							],
		answer: 2
	},
	{
		question: 'Which operator is used to assign a value to a variable?',
		choices: [
							'x',
							'-',
							'*',
							'='
							],
		answer: 3
	},
	{
		question: 'What will the following code return: Boolean(10 &gt 9)',
		choices: [
							'false',
							'NaN',
							'true'
							],
		answer: 2
	},
	{
		question: 'Is JavaScript case-sensitive?',
		choices: [
							'No',
							'Yes'
							],
		answer: 1
	}

]


