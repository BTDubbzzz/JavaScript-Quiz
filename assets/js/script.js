var timerElement = document.getElementById('timer');
var startButton = document.getElementById('start-button');
var highScoreListParent = document.getElementById('high-score-list');
var shownQuestion = document.getElementById('question');
var shownOption1 = document.getElementById('option-1');
var shownOption2 = document.getElementById('option-2');
var shownOption3 = document.getElementById('option-3');
var shownOption4 = document.getElementById('option-4');

var currentChosenOption = 0;
var currentQuestionNumber = 0;

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
	if (currentQuestionNumber < 3) {
		currentQuestionNumber++;
		QuizOrder(currentQuestionNumber);
	}
}

function QuizOrder(whichQuestion) {
	console.log('currentQuestionNumber :>> ', currentQuestionNumber);
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

function isCurrentAnswerCorrect() {
	if (currentChosenOption === currentQuestion.CORRECTANSWER) {
		console.log('CORRECT ANSWER');
		return true;
	} else {
		console.log('WRONG ANSWER');
		return false;
	}
}

/* find a way to make sure the question is answered before going to the next one */

function quizTimer() {
	var sec = 15;
	var clock = setInterval(function () {
		timerElement.innerHTML = sec;
		sec--;
		if (sec < 0) {
			clearInterval(clock);
			timerElement.innerHTML = 0;
		}
	}, 1000);
}

startButton.addEventListener('click', quizTimer);

function addHighScores() {
	var newHighScoreElement = document.createElement('li');
	newHighScoreElement.textContent = prompt('enter initials');
	highScoreListParent.appendChild(newHighScoreElement);
}

QuizOrder(currentQuestionNumber);

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
