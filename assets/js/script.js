var timerElement = document.getElementById('timer');
var startButton = document.getElementById('start-button');
var highScoreListParent = document.getElementById('high-score-list');
var shownQuestion = document.getElementById('question');
var shownOption1 = document.getElementById('option-1');
var shownOption2 = document.getElementById('option-2');
var shownOption3 = document.getElementById('option-3');
var shownOption4 = document.getElementById('option-4');

var question1 = {
	question: 'a',
	CHOICE1: 'a',
	CHOICE2: 'a',
	CHOICE3: 'a',
	CHOICE4: 'a',
	CORRECTANSWER: '',
};
var question2 = {
	question: 'b',
	CHOICE1: 'b',
	CHOICE2: 'b',
	CHOICE3: 'b',
	CHOICE4: 'b',
	CORRECTANSWER: '',
};
var question3 = {
	question: 'c',
	CHOICE1: 'c',
	CHOICE2: 'c',
	CHOICE3: 'c',
	CHOICE4: 'c',
	CORRECTANSWER: '',
};
var question4 = {
	question: 'd',
	CHOICE1: 'd',
	CHOICE2: 'd',
	CHOICE3: 'd',
	CHOICE4: 'd',
	CORRECTANSWER: '',
};

function randomQuestionSelector() {
	var whichQuestionToShow;
}

function presentCurrentQuestion() {
	//SHOW *whichQuestionToShow* is currently selected
	//plug each randomQuestion object value into
	/*  

    shownQuestion
    shownOption1
    shownOption2
    shownOption3
    shownOption4

*/
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
