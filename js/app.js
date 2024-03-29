'use strick';
const bookNumber = +localStorage.getItem('bookNumber');
const quizNumber = localStorage.getItem('quizNumber');
const quiz = quizAll.filter((w) => {
  return (
    w.bookNumber === bookNumber &&
    (w.quizNumber === +quizNumber || quizNumber.toString() === 'All')
  );
});

//* DOM elements
const inputShow = document.querySelector(['input[name="show"']);
const quizImg = document.querySelector(['img[alt="quiz-img"']);
const questionNumber = document.querySelector('.question-number .number');
const quizDesc = document.querySelector('.quiz-desc');
const questionText = document.querySelector('.question-text');
const questionDesc = document.querySelector('.question-desc');
const questionExam = document.querySelector('.question-exam');
const optionContainer = document.querySelector('.option-container');
const answersIndicatorContainer = document.querySelector('.answers-indicator');
const homeBox = document.querySelector('.home-box');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const textarea = document.querySelector('textarea');

const scripts = document.querySelectorAll('script');

//* Defining "let" variables
let questionCounter = 0;
let currentQuestion = {};
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;
let unknownWords = [];

// push the quiz array into availableQuestions Array.
function setAvailableQuestions() {
  // console.log('quiz', quiz);
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestions.push(quiz[i]);
  }
}
// show or hide the inage and desc of questions
inputShow.addEventListener('click', (e) => {
  // console.dir(e.target.checked);
  console.log(quizImg);
  if (e.target.checked) {
    quizDesc.style = 'display: flex';
  } else {
    quizDesc.style = 'display: none';
  }
});

// set question number, questin text and option
function getNewQuestion() {
  // get random question
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];

  // set question number
  if (window.location.pathname === '/quiz-html/quiz0.html') {
    questionNumber.innerHTML =
      questionCounter + 1 + '-с |' + ' Савлоллар ' + 25 + ' та';
  } else {
    questionNumber.innerHTML =
      questionCounter +
      1 +
      '/' +
      quiz.length +
      ' | quiz-' +
      currentQuestion.quizNumber +
      ' | ' +
      currentQuestion.bookNumber +
      '/' +
      currentQuestion.unitNumber;
  }
  // set question text

  //// console.log(currentQuestion.answerIndex);
  questionText.innerHTML =
    currentQuestion.en +
    ' ' +
    ` <span style="color: red;">` +
    currentQuestion.pron +
    `</span>`;
  quizImg.src =
    '../img/wordlist' +
    currentQuestion.bookNumber +
    '/' +
    currentQuestion.id +
    '_' +
    currentQuestion.en +
    '.jpg';
  questionDesc.innerHTML = currentQuestion.desc;
  questionExam.innerHTML = '→ ' + currentQuestion.exam;
  // get the position of 'CurrentQuestion' from the availableQuestions Array;
  const currentPositionOfCurrentQuestion =
    availableQuestions.indexOf(currentQuestion);
  // console.log(currentPositionOfCurrentQuestion);
  const curPosit1 = currentPositionOfCurrentQuestion;
  // remove the currentQuestion from the availableQuestions Arrat, so that  the question does not repeat.
  availableQuestions.splice(curPosit1, 1);

  // show quiestion img if the img proporty exists
  // if (currentQuestion.hasOwnProperty('image')) {
  //   const img = document.createElement('IMG');
  //   //// console.log(currentQuestion.image);
  //   img.src = currentQuestion.image;
  //   questionText.append(img);
  // }

  // set options
  // get the length ot options
  const optionsLength = currentQuestion.uzOptions.length;
  // push options into availableOptions Array
  for (let i = 0; i < optionsLength; i++) {
    availableOptions.push(i);
  }
  // create options in html
  optionContainer.innerHTML = '';
  let animationDelay = 0.15;
  for (let i = 0; i < optionsLength; i++) {
    // random option
    const optionIndex = Math.floor(Math.random() * availableOptions.length);
    const currentOption = availableOptions[optionIndex];
    // console.log('currentOption', currentOption, availableOptions);
    // get the position of 'CurrentOption' from the availableOptions Array;
    const currentPositionOfCurrentOption =
      availableOptions.indexOf(currentOption);
    const curPosit2 = currentPositionOfCurrentOption;
    // remove the currentOption from the availableOptions Array, so that  the option does not repeat.
    availableOptions.splice(curPosit2, 1);
    //// console.log(currentOption);
    //// console.log(availableOptions);
    const option = document.createElement('DIV');
    option.innerHTML = currentQuestion.uzOptions[currentOption];
    option.id = currentOption;
    option.style.animationDelay = animationDelay + 's';
    animationDelay += 0.15;
    option.className = 'option';
    optionContainer.append(option);
    option.setAttribute('onclick', 'getResult(this)');
  }
  questionCounter++;
}
//// console.log();
// console.log(window.location.pathname);

function next() {
  // console.log(questionCounter);
  if (
    window.location.pathname == '/quiz-html/quiz0.html' &&
    questionCounter === 25
  ) {
    quizOver();
  }
  if (questionCounter === quiz.length) {
    //// console.log("quiz over");
    quizOver();
  }
  getNewQuestion();
}

// get the result of the current attempt question
function getResult(optionElement) {
  const id = parseInt(optionElement.id);
  //// console.log(id);
  //// console.log(currentQuestion);
  // get the answer by comparing the id of clecked option
  if (id === currentQuestion.answerIndex) {
    // set the green color to the correct option
    optionElement.classList.add('correct');
    // add the correct mark to the indicator
    updateAnswerIndicator('correct');
    correctAnswers++;
  } else {
    unknownWords.push(currentQuestion.en);
    // set the red color to the incorrect option
    optionElement.classList.add('wrong');
    // add the incorrect mark to the indicator
    updateAnswerIndicator('wrong');
    // if the answer is incorrect then show the correct option by adding green color
    const optionsLength = optionContainer.children.length;
    for (let i = 0; i < optionsLength; i++) {
      if (
        parseInt(optionContainer.children[i].id) === currentQuestion.answerIndex
      ) {
        optionContainer.children[i].classList.add('correct');
      }
    }
  }
  attempt++;
  unclickableOptions();
}
// make all the options unclickable once the user select a option (RESTRICT THE USER TO CHANGE THE OPTION AGAIN)
function unclickableOptions() {
  const optionsLength = optionContainer.children.length;
  for (let i = 0; i < optionsLength; i++) {
    optionContainer.children[i].classList.add('already-answered');
  }
}

function answersIndicator() {
  answersIndicatorContainer.innerHTML = '';
  if (window.location.pathname === '/quiz-html/quiz0.html') {
    const totalQuestion = 25;
    for (let i = 0; i < totalQuestion; i++) {
      const indicator = document.createElement('DIV');
      answersIndicatorContainer.append(indicator);
    }
  } else {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
      const indicator = document.createElement('DIV');
      answersIndicatorContainer.append(indicator);
    }
  }
}

function updateAnswerIndicator(markType) {
  answersIndicatorContainer.children[questionCounter - 1].classList.add(
    markType
  );
}

function quizOver() {
  // hide the quiz box
  quizBox.classList.add('hide');
  // show the result box
  resultBox.classList.remove('hide');
  quizResult();
}

function tryAgainQuiz() {
  // hide the result box
  resultBox.classList.add('hide');
  // show the quiz box
  quizBox.classList.remove('hide');
  resetQuiz();
  startQuiz();
}

function resetQuiz() {
  questionCounter = 0;
  //  currentQuestion = {};
  //  availableQuestions = [];
  //  availableOptions = [];
  correctAnswers = 0;
  attempt = 0;
}

function goToStart() {
  // hide the result box
  resultBox.classList.add('hide');
  // show the home box
  homeBox.classList.remove('hide');
  resetQuiz();
}

// get the quiz result
function quizResult() {
  resultBox.querySelector('.total-question').innerHTML = quiz.length;
  resultBox.querySelector('.total-attempt').innerHTML = attempt;
  resultBox.querySelector('.total-correct').innerHTML = correctAnswers;
  resultBox.querySelector('.total-wrong').innerHTML = attempt - correctAnswers;
  const percentage = (correctAnswers / quiz.length) * 100;
  resultBox.querySelector('.percentage').innerHTML =
    percentage.toFixed(2) + '%';
  resultBox.querySelector('.total-score').innerHTML =
    correctAnswers + ' / ' + quiz.length;
  textarea.value = unknownWords.toString();
}

//* ==== STARTIN POINT ====
function startQuiz() {
  // hide the home box
  homeBox.classList.add('hide');
  // show the quiz box
  quizBox.classList.remove('hide');
  // first we will set all quiz in availableQuestions Array
  setAvailableQuestions();
  // second we will call getNewQuestion(); function
  getNewQuestion();
  // to create indicator of answers
  answersIndicator();
}

window.onload = function () {
  if (window.location.pathname === '/quiz-html/quiz0.html') {
    homeBox.querySelector(
      '.total-questions'
    ).innerHTML = ` 25  (Random: 25 / ${quiz.length})`;
  } else {
    homeBox.querySelector('.total-questions').innerHTML = quiz.length;
  }
};
