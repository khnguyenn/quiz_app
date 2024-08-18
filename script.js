const questions = [
    {
        question: "Tích phân của hàm số f(x) = 2x từ 0 đến 2 là gì?",
        image:"",
        answers: [
            { text: "4", correct: true },
            { text: "2", correct: false },
            { text: "0", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Tính S",
        image: "img/test2.jpg",
        answers: [
            { text: "S = 5", correct: false },
            { text: "S = 8", correct: false },
            { text: "S = 7", correct: true },
            { text: "S = 11", correct: false }
        ]
    },
    {
        question: "Tích phân ∫ cos(x) dx từ 0 đến π/2 là bao nhiêu?",
        image:"",
        answers: [
            { text: "1", correct: true },
            { text: "0", correct: false },
            { text: "π/2", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        question: "Tích phân của hàm số f(x) = e^x từ 0 đến 1 là gì?",
        image:"",
        answers: [
            { text: "e - 1", correct: true },
            { text: "e + 1", correct: false },
            { text: "1", correct: false },
            { text: "e", correct: false }
        ]
    },
    {
        question: "Tích phân ∫ 1/x dx từ 1 đến e là gì?",
        image:"",
        answers: [
            { text: "1", correct: false },
            { text: "e", correct: false },
            { text: "ln(e)", correct: true },
            { text: "ln(e) - 1", correct: false }
        ]
    },
   
];

const quizData = [
    {
        question: "∫ 1/x dx = ln(x) + C",
        correctAnswer: "false",
    },
    {
        question: "∫ 1/(cos^2(x) dx = tanx + C",
        correctAnswer: "true",
    },
    {
        question: "∫ sin(x)dx = -cos(x) + C",
        correctAnswer: "true",
    },
    {
        question: "∫ e^x dx = e^x + C",
        correctAnswer: "true",
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const questionImage = document.getElementById("question-image");
const questionInfo = document.getElementById("question-info");
const totalTimeElement = document.getElementById("total-time");
const quizbox = document.querySelector(".app");
const resultbox = document.querySelector(".result-box");
const tryAgainButton = document.querySelector(".tryAgain-btn");
const truefalsebox = document.querySelector(".true-false-box");
const truefalseTimeElement = document.getElementById('truefalse-time');

let totalQuestions = questions.length;
let currentQuestionIndex = 0;
let score = 0;
let timer; 
let startTime;
let totalTimeSpent;


function startQuiz() {
    scoretf = 0;
    currentQuestionIndex = 0;
    score = 0;
    startStopwatch();
    questionInfo.style.display = "block"; 
    showQuestion();
}

function updateQuestionInfo() {
    questionInfo.innerHTML = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60); // Calculate total minutes
    const secs = seconds % 60; // Calculate remaining seconds
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`; // Format time as MM:SS
}

// Function to update the total time spent
function updateTotalTime() {
    if (startTime) {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Calculate elapsed time in seconds
        const formattedTime = formatTime(elapsedTime);

        totalTimeElement.innerHTML = `Time spent: ${formattedTime}`;// Update the display

        const truefalseTimeElement = document.getElementById('truefalse-time');
        if (truefalseTimeElement) {
            truefalseTimeElement.innerHTML = `Time spent: ${formattedTime}`;
        }

        totalTimeSpent = elapsedTime;
    }
}

// Function to start the stopwatch
function startStopwatch() {
    startTime = Date.now(); // Set start time
    timer = setInterval(updateTotalTime, 1000); // Update every second
}

// Function to stop the stopwatch
function stopStopwatch() {
    clearInterval(timer); // Clear the timer
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    if (currentQuestion.image) {
        questionImage.src = currentQuestion.image; 
        questionImage.style.display = "block"; // Show the image
    } else {
        questionImage.style.display = "none"; // Hide if no image
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
    updateQuestionInfo(); 
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Test Again";
    nextButton.style.display = "block";
}   

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionInfo.style.display = "none";
        // stopStopwatch();
        // showResultBox();
        showTrueFalse();
    }
}

function showResultBox() {
    truefalsebox.classList.remove('active');
    resultbox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    const timeText = document.querySelector('.time-text');
    scoreText.textContent = `You scored ${score + scoretf} out of ${questions.length + quizData.length}!`;

    const circularProgess = document.querySelector('.circular-progess');
    const progessValue = document.querySelector('.progress-value');
    
    timeText.textContent = `Time Spent: ${formatTime(totalTimeSpent)}`;

    let progessStartValue = -1;
    let progessEndValue = (score/ questions.length) * 100;
    let speed = 20;

    let progess = setInterval(() => {
        progessStartValue++;
        // console.log(progessStartValue);
        progessValue.textContent = `${progessStartValue}%`;
        circularProgess.style.background = `conic-gradient(#001e4d ${progessStartValue * 3.6}deg,rgba(255, 255, 255, 0.114) 0deg)`;
        if(progessStartValue == progessEndValue) {
            clearInterval(progess);
        }

    }, speed);

    const circularProgess1 = document.querySelector('.circular-progess_1');
    const progessValue1 = document.querySelector('.progress-value_1');
    

    let progessStartValue1 = -1;
    let progessEndValue1 = (scoretf/ quizData.length) * 100;
    let speed1 = 20;

    let progess1 = setInterval(() => {
        progessStartValue1++;
        // console.log(progessStartValue);
        progessValue1.textContent = `${progessStartValue1}%`;
        circularProgess1.style.background = `conic-gradient(#001e4d ${progessStartValue1 * 3.6}deg,rgba(255, 255, 255, 0.114) 0deg)`;
        if(progessStartValue1 == progessEndValue1) {
            clearInterval(progess1);
        }

    }, speed1);
}



function showTrueFalse() {
    quizbox.classList.add('hidden');
    truefalsebox.classList.add('active');
    loadQuiz(); 
    updateTotalTime();
}



nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } 
})

tryAgainButton.onclick = () => {
    resultbox.classList.remove('active');
    quizbox.classList.remove('hidden');
    startQuiz();
}

function loadQuiz() {
    const quizQuestionsContainer = document.getElementById('quiz-questions');
    quizQuestionsContainer.innerHTML = ''; // Clear any existing content

    quizData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.question}</td>
            <td><input type="radio" name="q${index}" value="true"></td>
            <td><input type="radio" name="q${index}" value="false"></td>
        `;
        quizQuestionsContainer.appendChild(row);
    });
}

let scoretf = 0;


function checkAnswers(event) {
    event.preventDefault();

    quizData.forEach((item, index) => {
        const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        
        if (selectedAnswer && selectedAnswer.value === item.correctAnswer) {
            scoretf++;
        }
    });
    showResultBox();

    // const resultContainer = document.getElementById('result');
    // resultContainer.textContent = `You scored ${scoretf} out of ${quizData.length}.`;
}


const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", checkAnswers);


startQuiz();
