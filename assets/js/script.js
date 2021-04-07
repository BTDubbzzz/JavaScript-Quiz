var timerElement = document.getElementById('timer');
var startButton = document.getElementById('start-button');
var highScoreListParent = document.getElementById('high-score-list');
var shownQuestion = document.getElementById('question');
var shownOption1 = document.getElementById('option-1');
var shownOption2 = document.getElementById('option-2');
var shownOption3 = document.getElementById('option-3');
var shownOption4 = document.getElementById('option-4');

var question1 = {
	question: '1Q',
	CHOICE1: '1a',
	CHOICE2: '1b',
	CHOICE3: '1c',
	CHOICE4: '1d',
	CORRECTANSWER: this.CHOICE1,
};
var question2 = {
	question: 'b',
	CHOICE1: 'b',
	CHOICE2: 'b',
	CHOICE3: 'b',
	CHOICE4: 'b',
	CORRECTANSWER: this.CHOICE2,
};
var question3 = {
	question: 'c',
	CHOICE1: 'c',
	CHOICE2: 'c',
	CHOICE3: 'c',
	CHOICE4: 'c',
	CORRECTANSWER: this.CHOICE3,
};
var question4 = {
	question: '4Q',
	CHOICE1: '4a',
	CHOICE2: '4b',
	CHOICE3: '4c',
	CHOICE4: '4d',
	CORRECTANSWER: '4d',
};
var currentQuestion = question4;

function randomQuestionSelector() {}

function presentCurrentQuestion() {
	shownQuestion.textContent = currentQuestion.question;
	shownOption1.textContent = currentQuestion.CHOICE1;
	shownOption2.textContent = currentQuestion.CHOICE2;
	shownOption3.textContent = currentQuestion.CHOICE3;
	shownOption4.textContent = currentQuestion.CHOICE4;
}
var currentChosenOption = 0;

function getCurrentChosenOption() {
	shownOption1.addEventListener('click', function () {
		console.log('you clicked on 1');
		currentChosenOption = currentQuestion.CHOICE1;
		console.log('currentChosenOption :>> ', currentChosenOption);
		isCurrentAnswerCorrect();
	});
	shownOption2.addEventListener('click', function () {
		console.log('you clicked on 2');
		currentChosenOption = currentQuestion.CHOICE2;
		console.log('currentChosenOption :>> ', currentChosenOption);
		isCurrentAnswerCorrect();
	});
	shownOption3.addEventListener('click', function () {
		console.log('you clicked on 3');
		currentChosenOption = currentQuestion.CHOICE3;
		console.log('currentChosenOption :>> ', currentChosenOption);
		isCurrentAnswerCorrect();
	});
	shownOption4.addEventListener('click', function () {
		console.log('you clicked on 4');
		currentChosenOption = currentQuestion.CHOICE4;
		console.log('currentChosenOption :>> ', currentChosenOption);
		isCurrentAnswerCorrect();
	});
	return currentChosenOption;
}

function isCurrentAnswerCorrect() {
	console.log(
		'currentQuestion.CORRECTANSWER :>> ',
		currentQuestion.CORRECTANSWER
	);
	if (currentChosenOption == currentQuestion.CORRECTANSWER) {
		console.log('CORRECT ANSWER');
	} else {
		console.log('WRONG ANSWER');
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

presentCurrentQuestion();
getCurrentChosenOption();

console.log('question4.CORRECTANSWER :>> ', question4.CORRECTANSWER);
