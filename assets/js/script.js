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

var question1 = {
	question: '1Q',
	CHOICE1: '1a',
	CHOICE2: '1b',
	CHOICE3: '1c',
	CHOICE4: '1d',
	CORRECTANSWER: '1a',
};
var question2 = {
	question: '2Q',
	CHOICE1: '2a',
	CHOICE2: '2b',
	CHOICE3: '2c',
	CHOICE4: '2d',
	CORRECTANSWER: '2b',
};
var question3 = {
	question: '3Q',
	CHOICE1: '3a',
	CHOICE2: '3b',
	CHOICE3: '3c',
	CHOICE4: '3d',
	CORRECTANSWER: '3c',
};
var question4 = {
	question: '4Q',
	CHOICE1: '4a',
	CHOICE2: '4b',
	CHOICE3: '4c',
	CHOICE4: '4d',
	CORRECTANSWER: '4d',
};

var questionsArray = [question1, question2, question3, question4];

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
		shownQuestion.textContent = 'Quiz is Over, enter your high score';
		var newScore = sec;
		addHighScores();
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
	sec = 5;
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

function addHighScores() {
	var newHighScoreElement = document.createElement('li');
	newHighScoreElement.textContent = prompt('enter initials');
	highScoreListParent.appendChild(newHighScoreElement);
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
