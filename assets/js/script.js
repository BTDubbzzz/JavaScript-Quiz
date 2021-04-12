var timerElement = document.getElementById('timer');
var startButton = document.getElementById('start-button');
var highScoreListParent = document.getElementById('high-score-list');
var shownQuestion = document.getElementById('question');
var shownOption1 = document.getElementById('option-1');
var shownOption2 = document.getElementById('option-2');
var shownOption3 = document.getElementById('option-3');
var shownOption4 = document.getElementById('option-4');
var sec;
var currentChosenOption = 0;
var currentQuestionNumber = 0;
var startButtonClicks = 0;
var newScore;
var highScoreArray = []




highScoreArray = JSON.parse(localStorage.getItem('highScoreArray'))
console.log(highScoreArray)
if (highScoreArray) {
	for (i = 0; i < highScoreArray.length; i++) {
		temp = document.createElement('li');
		temp.textContent = highScoreArray[i];
		highScoreListParent.appendChild(temp);
	}
}

var question1 = {
	question: 'Question 1) Inside which element do we put the JavaScript source?',
	CHOICE1: '<script>',
	CHOICE2: '<scripting>',
	CHOICE3: '<javascript>',
	CHOICE4: '<js>',
	CORRECTANSWER: '<script>',
};
var question2 = {
	question: 'Question 2) Where is the correct place to insert the JavaScript?',
	CHOICE1: 'The <head> section',
	CHOICE2: 'The beginning of the <body> section',
	CHOICE3: 'The end of the <body> section',
	CHOICE4: 'The <footer> section',
	CORRECTANSWER: 'The end of the <body> section',
};
var question3 = {
	question: 'Question 3) How do you write \"Hello World\" in an alert box?',
	CHOICE1: 'alertbox("Hello World");',
	CHOICE2: 'msg("Hello World");',
	CHOICE3: 'msgBox("Hello World");',
	CHOICE4: 'alert("Hello World");',
	CORRECTANSWER: 'alert("Hello World");',
};
var question4 = {
	question: 'Question 4) How do you initialize a function in JavaScript?',
	CHOICE1: 'function:myFunction()',
	CHOICE2: 'function = myFunction()',
	CHOICE3: 'function myFunction()',
	CHOICE4: 'function === myFunction()',
	CORRECTANSWER: 'function myFunction()',
};
var question5 = {
	question: 'Question 5) How do you write an IF statement in JavaScript?',
	CHOICE1: 'if i = 5 then',
	CHOICE2: 'if (i == 5)',
	CHOICE3: 'if i = 5',
	CHOICE4: 'if i == 5 then',
	CORRECTANSWER: 'if (i == 5)',
};
var question6 = {
	question: 'Question 6) JavaScript is the same as Java',
	CHOICE1: 'True',
	CHOICE2: 'False',
	CHOICE3: '',
	CHOICE4: '',
	CORRECTANSWER: 'False',
};
var question7 = {
	question: 'Question 7) How do you declare a variable in JavaScript?',
	CHOICE1: 'var carName;',
	CHOICE2: 'var = carName;',
	CHOICE3: 'var carName();',
	CHOICE4: 'variable carName;',
	CORRECTANSWER: 'var carName;',
};
var question8 = {
	question: 'Which is the correct statement to run code if "x" is equal to 2?',
	CHOICE1: 'if (x 2)',
	CHOICE2: 'if (x = 2)',
	CHOICE3: 'if (x === 2)',
	CHOICE4: 'if x == 2',
	CORRECTANSWER: 'if (x === 2)',
};

var questionsArray = [
	question1,
	question2,
	question3,
	question4,
	question5,
	question6,
	question7,
	question8,
];

function nextQuestion() {
	if (sec < 0) {
		endQuizText();
	} else if (currentQuestionNumber < questionsArray.length - 1) {
		currentQuestionNumber++;
		QuizOrder(currentQuestionNumber);
	} else {
		currentQuestionNumber++;
		endQuizText();
	}
}

function QuizOrder(whichQuestion) {
	currentQuestion = questionsArray[whichQuestion];
	presentCurrentQuestion();
}

function presentCurrentQuestion() {
	shownQuestion.textContent = currentQuestion.question;
	shownOption1.textContent = currentQuestion.CHOICE1;
	shownOption2.textContent = currentQuestion.CHOICE2;
	shownOption3.textContent = currentQuestion.CHOICE3;
	shownOption4.textContent = currentQuestion.CHOICE4;
}

function endQuizText() {
	if (sec > 0) {
		renderScreenTimer();
		shownQuestion.textContent = 'Quiz is Over, enter your high score. Then refresh the page to try again.';
		newScore = sec;
		addHighScoresNew();
		console.log('newScore :>> ', newScore);
	} else if (sec <= 0) {
		shownQuestion.textContent =
			'You did not complete the quiz in time. Please refresh to try again.';
	}
	shownOption1.textContent = '';
	shownOption2.textContent = '';
	shownOption3.textContent = '';
	shownOption4.textContent = '';
}

function isCurrentAnswerCorrect() {
	if (currentChosenOption === currentQuestion.CORRECTANSWER) {
		console.log('CORRECT ANSWER');
		return true;
	} else {
		console.log('WRONG ANSWER');
		sec = sec - 15;
		if (sec <= 0) {
			endQuizText();
		}
		return false;
	}
}
function renderScreenTimer() {
	timerElement.innerHTML = sec;
}

function quizTimer() {
	sec = 60;
	var clock = setInterval(function () {
		renderScreenTimer();
		sec--;
		console.log('currentQuestionNumber :>> ', currentQuestionNumber);
		console.log('questionsArray.length :>> ', questionsArray.length);
		if (currentQuestionNumber === questionsArray.length) {
			clearInterval(clock);
		}
		if (sec < 0) {
			timerElement.innerHTML = 0;
			clearInterval(clock);
			endQuizText();
		}
	}, 1000);
}

startButton.addEventListener('click', function () {
	if (
		startButtonClicks === 0 ||
		currentQuestionNumber === questionsArray.length
	) {
		quizTimer();
		renderScreenTimer();
		QuizOrder(currentQuestionNumber);
		startButtonClicks++;
	} else {
	}
});

function addHighScoresNew() {
	var newHighScore = (prompt('Your score is ' + newScore + '. Please enter initials for the leaderboard')) + ': ' + newScore;
	console.log('highScoreArray ->> ' + highScoreArray)
	if (highScoreArray === null) {
		highScoreArray = []
	}
	highScoreArray.push(newHighScore)
	localStorage.setItem('highScoreArray', JSON.stringify(highScoreArray))
		temp = document.createElement('li');
		temp.textContent = newHighScore
		highScoreListParent.appendChild(temp);
	}


shownOption1.addEventListener('click', function (event) {
	event.preventDefault();
	event.stopPropagation();
	currentChosenOption = currentQuestion.CHOICE1;
	console.log('currentChosenOption :>> ', currentChosenOption);
	isCurrentAnswerCorrect();
	nextQuestion();
});
shownOption2.addEventListener('click', function (event) {
	event.preventDefault();
	event.stopPropagation();
	currentChosenOption = currentQuestion.CHOICE2;
	console.log('currentChosenOption :>> ', currentChosenOption);
	isCurrentAnswerCorrect();
	nextQuestion();
});
shownOption3.addEventListener('click', function (event) {
	event.preventDefault();
	event.stopPropagation();
	currentChosenOption = currentQuestion.CHOICE3;
	console.log('currentChosenOption :>> ', currentChosenOption);
	isCurrentAnswerCorrect();
	nextQuestion();
});
shownOption4.addEventListener('click', function (event) {
	event.preventDefault();
	event.stopPropagation();
	currentChosenOption = currentQuestion.CHOICE4;
	console.log('currentChosenOption :>> ', currentChosenOption);
	isCurrentAnswerCorrect();
	nextQuestion();
});
