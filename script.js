const questions = [
    {
        question : "Bai Hoc Dau Tien",
        image : "img/test1.png",
        answers:[
            { text: "Tich Phan", correct:false},
            { text: "Nguyen Ham", correct:true},
            { text: "Dao Ham", correct:false},
            { text: "Vi Phan", correct:false},
            
        ]
    },
    {
        question : "Bai Hoc Dau Tien",
        answers:[
            { text: "Tich Phan", correct:false},
            { text: "Nguyen Ham", correct:true},
            { text: "Dao Ham", correct:false},
            { text: "Vi Phan", correct:false},
            
        ]
    },
    {
        question : "Bai Hoc Dau Tien",
        image : "img/test1.png",
        answers:[
            { text: "Tich Phan", correct:false},
            { text: "Nguyen Ham", correct:true},
            { text: "Dao Ham", correct:false},
            { text: "Vi Phan", correct:false},
            
        ]
    },
    {
        question : "Bai Hoc Dau Tien",
        image : "img/test1.png",
        answers:[
            { text: "Tich Phan", correct:false},
            { text: "Nguyen Ham", correct:true},
            { text: "Dao Ham", correct:false},
            { text: "Vi Phan", correct:false},
            
        ]
    },
    
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const questionImage = document.getElementById("question-image");

let totalQuestions = questions.length;
let currentQuestionIndex = 0;
let score = 0;
let timer; 
let startTime;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    startStopwatch();
    showQuestion();
}

function updateQuestionInfo() {
    const questionInfo = document.getElementById("question-info");
    questionInfo.innerHTML = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60); // Calculate total minutes
    const secs = seconds % 60; // Calculate remaining seconds
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`; // Format time as MM:SS
}

// Function to update the total time spent
function updateTotalTime() {
    const totalTimeElement = document.getElementById("total-time");
    if (startTime) {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Calculate elapsed time in seconds
        totalTimeElement.innerHTML = `Time spent: ${formatTime(elapsedTime)}`; // Update the display
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
    questionImage.style.display = "none";
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
        stopStopwatch();
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})
startQuiz();
