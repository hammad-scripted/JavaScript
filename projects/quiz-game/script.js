// DOM ELEMENTS
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const answerContainer = document.getElementById('answers-container');
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
}
function restartQuiz() {
  console.log('restart');
}
