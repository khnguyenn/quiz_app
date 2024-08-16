const questions = [
    {
        question: "Tích phân của hàm số f(x) = 2x từ 0 đến 2 là gì?",
        answers: [
            { text: "4", correct: true },
            { text: "2", correct: false },
            { text: "0", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Tích phân ∫ x^2 dx từ 1 đến 3 là bao nhiêu?",
        answers: [
            { text: "26/3", correct: false },
            { text: "9", correct: false },
            { text: "28/3", correct: true },
            { text: "10", correct: false }
        ]
    },
    {
        question: "Tích phân ∫ cos(x) dx từ 0 đến π/2 là bao nhiêu?",
        answers: [
            { text: "1", correct: true },
            { text: "0", correct: false },
            { text: "π/2", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        question: "Tích phân của hàm số f(x) = e^x từ 0 đến 1 là gì?",
        answers: [
            { text: "e - 1", correct: true },
            { text: "e + 1", correct: false },
            { text: "1", correct: false },
            { text: "e", correct: false }
        ]
    },
    {
        question: "Tích phân ∫ 1/x dx từ 1 đến e là gì?",
        answers: [
            { text: "1", correct: false },
            { text: "e", correct: false },
            { text: "ln(e)", correct: true },
            { text: "ln(e) - 1", correct: false }
        ]
    },
    {
        question: "Tích phân ∫ sin(x) dx từ 0 đến π là bao nhiêu?",
        answers: [
            { text: "0", correct: false },
            { text: "2", correct: true },
            { text: "1", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "Tích phân của ∫ 2x dx từ 1 đến 4 là gì?",
        answers: [
            { text: "14", correct: false },
            { text: "12", correct: false },
            { text: "16", correct: true },
            { text: "18", correct: false }
        ]
    },
    {
        question: "Tích phân ∫ x dx từ 2 đến 5 là gì?",
        answers: [
            { text: "8", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "14", correct: false }
        ]
    },
    {
        question: "Tích phân ∫ (3x^2 - 2x + 1) dx từ 0 đến 1 là bao nhiêu?",
        answers: [
            { text: "2", correct: true },
            { text: "1", correct: false },
            { text: "1/3", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "Tích phân của ∫ (2x + 3) dx từ 1 đến 2 là gì?",
        answers: [
            { text: "7", correct: true },
            { text: "6", correct: false },
            { text: "5", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "Tích phân ∫ 1/x^2 dx từ 1 đến 2 là bao nhiêu?",
        answers: [
            { text: "1/2", correct: true },
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "1/3", correct: false }
        ]
    },
    {
        question: "Tích phân của ∫ tan(x) dx từ 0 đến π/4 là bao nhiêu?",
        answers: [
            { text: "ln(2)", correct: true },
            { text: "1", correct: false },
            { text: "ln(3)", correct: false },
            { text: "ln(4)", correct: false }
        ]
    },
    {
        question: "Tích phân ∫ e^(2x) dx từ 0 đến 1 là bao nhiêu?",
        answers: [
            { text: "(e^2 - 1)/2", correct: true },
            { text: "e^2 - 1", correct: false },
            { text: "2e - 2", correct: false },
            { text: "e^2 - e", correct: false }
        ]
    },
    {
        question: "Tích phân của ∫ (x^2 + 1) dx từ -1 đến 1 là bao nhiêu?",
        answers: [
            { text: "2/3", correct: false },
            { text: "2", correct: true },
            { text: "4/3", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "Tích phân ∫ sec^2(x) dx từ 0 đến π/4 là bao nhiêu?",
        answers: [
            { text: "1", correct: false },
            { text: "π/4", correct: false },
            { text: "ln(2)", correct: true },
            { text: "2", correct: false }
        ]
    },
    {
        question: "Tích phân của ∫ (x^3 - 3x^2 + 2x) dx từ 0 đến 2 là bao nhiêu?",
        answers: [
            { text: "0", correct: false },
            { text: "2", correct: false },
            { text: "4", correct: true },
            { text: "6", correct: false }
        ]
    },
    {
        question: "Tích phân ∫ x*sin(x) dx từ 0 đến π là gì?",
        answers: [
            { text: "0", correct: true },
            { text: "2π", correct: false },
            { text: "π/2", correct: false },
            { text: "π", correct: false }
        ]
    },
    {
        question: "Tích phân ∫ (e^x * cos(x)) dx từ 0 đến π/2 là bao nhiêu?",
        answers: [
            { text: "e^(π/2)", correct: false },
            { text: "(e^(π/2) - 1)/2", correct: true },
            { text: "1", correct: false },
            { text: "(e^(π/2) + 1)/2", correct: false }
        ]
    },
    {
        question: "Tích phân ∫ (ln(x)/x^2) dx từ 1 đến e là gì?",
        answers: [
            { text: "-1/e", correct: true },
            { text: "-1", correct: false },
            { text: "1", correct: false },
            { text: "1/e", correct: false }
        ]
    },
    {
        question: "Tích phân ∫ (x^2 * e^x) dx từ 0 đến 1 là bao nhiêu?",
        answers: [
            { text: "e - 1", correct: false },
            { text: "2e - 1", correct: true },
            { text: "e + 1", correct: false },
            { text: "2e + 1", correct: false }
        ]
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

let totalQuestions = questions.length;
let currentQuestionIndex = 0;
let score = 0;
let timer; 
let startTime;
let totalTimeSpent;


function startQuiz() {
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
        totalTimeElement.innerHTML = `Time spent: ${formatTime(elapsedTime)}`; // Update the display
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
        stopStopwatch();
        showResultBox();
    }
}

function showResultBox() {
    quizbox.classList.add('hidden');
    resultbox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    const timeText = document.querySelector('.time-text');
    scoreText.textContent = `You scored ${score} out of ${questions.length}!`;

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


startQuiz();
