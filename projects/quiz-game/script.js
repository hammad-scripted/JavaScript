// DOM ELEMENTS
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionSpan = document.getElementById('total-questions');
const scoreSpan = document.getElementById('score');
const finalScoreSpan = document.getElementById('final-score');
const maxScoreSpan = document.getElementById('max-score');
const resultMessage = document.getElementById('result-message');
const restartButton = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress');

const quizQuestions = [
  {
    question: 'Which language is primarily used for styling web pages?',
    answers: [
      { text: 'HTML', correct: false },
      { text: 'CSS', correct: true },
      { text: 'Python', correct: false },
      { text: 'C++', correct: false },
    ],
  },
  {
    question: 'Which of these is a Hook in React?',
    answers: [
      { text: 'useStyle', correct: false },
      { text: 'useEffect', correct: true },
      { text: 'useAction', correct: false },
      { text: 'useLink', correct: false },
    ],
  },
  {
    question: 'What does JVM stand for in Java?',
    answers: [
      { text: 'Java Variable Method', correct: false },
      { text: 'Java Visual Manager', correct: false },
      { text: 'Java Virtual Machine', correct: true },
      { text: 'Java Version Model', correct: false },
    ],
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: [
      { text: 'Venus', correct: false },
      { text: 'Jupiter', correct: false },
      { text: 'Mars', correct: true },
      { text: 'Saturn', correct: false },
    ],
  },
  {
    question: 'What is the correct syntax for a "for" loop in C++?',
    answers: [
      { text: 'for (int i = 0; i < 5; i++)', correct: true },
      { text: 'foreach (i in 0..5)', correct: false },
      { text: 'for i = 1 to 5', correct: false },
      { text: 'loop (5 times)', correct: false },
    ],
  },
  {
    question: 'Which HTTP method is typically used to create a new resource?',
    answers: [
      { text: 'GET', correct: false },
      { text: 'DELETE', correct: false },
      { text: 'PUT', correct: false },
      { text: 'POST', correct: true },
    ],
  },
];

// QUIZ STATE VARS

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listener

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
  console.log('start');
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = score;
  startScreen.classList.remove('active');
  quizScreen.classList.add('active');
  setTimeout(() => {
    showQuestion();
  });
}
function showQuestion() {
  answersDisabled = false;
  const currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + '%';
  questionText.textContent = currentQuestion.question;

  // todo explain
  answersContainer.innerHTML = '';
  currentQuestion.answers.forEach((ans) => {
    const button = document.createElement('button');
    button.textContent = ans.text;
    button.classList.add('answer-btn');
    // ? what is dataset? it's a property of the button element that allows you to score custom data
    button.dataset.correct = ans.correct;
    button.addEventListener('click', selectAnswer);
    answersContainer.appendChild(button);
  });
}
function selectAnswer(e) {
  if (answersDisabled) {
    return;
  }
  answersDisabled = true;
  const selectButton = e.target;
  const isCorrect = selectButton.dataset.correct === 'true';
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('answer-btn-correct');
    } else if (button === selectButton) {
      button.classList.add('answer-btn-incorrect');
    }
  });
  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove('active');
  resultScreen.classList.add('active');
  finalScoreSpan.textContent = score;
  const percentage = (score / quizQuestions.length) * 100;
  if (percentage == 100) {
    resultMessage.textContent = 'Perfect! You are genius!';
  } else if (percentage >= 80) {
    resultMessage.textContent = 'Great Job! You know your stuff!';
  } else if (percentage >= 60) {
    resultMessage.textContent = 'Good Effort! Keep learning!';
  } else {
    resultMessage.textContent = 'Keep Studying! You will get better.';
  }
}
function restartQuiz() {
  resultScreen.classList.remove('active');
  startQuiz();
  console.log('restart');
}
