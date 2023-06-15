const data = [
    {
        id: 1,
        question: "Which of these fish is actually a fish?",
        answers: [
            { answer: "swordfish", isCorrect: true },
            { answer: "jellyfish", isCorrect: false },
            { answer: "starfish", isCorrect: false },
            { answer: "crayfish", isCorrect: false }
        ]
    },
    {
        id: 2,
        question: "A flutter is a group of :",
        answers: [
            { answer: "bees", isCorrect: false },
            { answer: "penguins", isCorrect: false },
            { answer: "butterflies", isCorrect: true },
            { answer: "camels", isCorrect: false }
        ]
    },
    {
        id: 3,
        question: "A group of which animals is referred to as a wake?",
        answers: [
            { answer: "bats", isCorrect: false },
            { answer: "vultures", isCorrect: true },
            { answer: "ants", isCorrect: false }
        ]
    }
];

const gameScreen = document.querySelector(".game"),
    resultScreen = document.querySelector(".result"),
    question = document.querySelector(".question"),
    answerContainer = document.querySelector(".answers"),
    submit = document.querySelector(".submit"),
    play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let selectedAnswer;

const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    selectedAnswer;
    showQuestion(qIndex);
    gameScreen.style.display = "block";
    resultScreen.style.display = "none";
}

play.addEventListener("click", () => {
    playAgain();
})

const showResult = () => {
    gameScreen.style.display = "none";
    resultScreen.style.display = "block";

    resultScreen.querySelector(".correct").textContent = `Correct Answers : ${correctCount}`;

    resultScreen.querySelector(".wrong").textContent = `Wrong Answers : ${wrongCount}`;

    resultScreen.querySelector(".total").textContent = `Correct Answers : ${correctCount * 10}`;
}

const showQuestion = (qNumber) => {
    if (qIndex === data.length) return showResult();
    question.textContent = data[qNumber].question;
    answerContainer.innerHTML = data[qNumber].answers.map((item, index) =>
        `<div class="answer">
            <input type="radio" id=${index} name="answer" value=${item.isCorrect}>
            <label for=${index}>${item.answer}</label>
        </div>`
    ).join("");

    selecteAnswer();
}

const selecteAnswer = () => {
    answerContainer.querySelectorAll("input").forEach(el => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        })
    });
}

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer !== undefined) {
            selectedAnswer === "true" ? correctCount++ : wrongCount++;
            qIndex++;
            showQuestion(qIndex);
        } else {
            alert("select an answer!");
        }

    })
}

showQuestion(qIndex);
submitAnswer();