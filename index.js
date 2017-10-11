const data = [
    {
        questionId: 'question1',
        questionText: 'How much 30/10?',
        correctAnswer: '3',
        options: [
            '3',
            '5'
        ],
        errorText: 'Incorrect',
        correctText: 'Correct'
    },
    {
        questionId: 'question2',
        questionText: 'How much 60/10?',
        correctAnswer: '6',
        options: [
            '3',
            '6',
            '7'
        ],
        errorText: 'Incorrect',
        correctText: 'Correct'
    }
];
const quiz = document.querySelector('.quiz');

data.forEach(question => {
   quiz.appendChild(renderQuestion(question));
});

function renderQuestion(question) {
    const res = document.createElement('div');
    res.innerHTML = `
    <div class="quiz-item">
        <div class="question">
            <div class="question-text"></div>
            <div class="question-options">
                 
            </div>
        </div>
        <div class="answer">
            <div class="correct">
                Correct
            </div>
            <div class="incorrect">
                Incorrect
            </div>
        </div>
    </div>`;

    const quizItem = res.querySelector('.quiz-item');
    const questionText = res.querySelector('.question-text');
    const answer = res.querySelector('.answer');
    const questionOptions = res.querySelector('.question-options');
    const correct = res.querySelector('.correct');
    const incorrect = res.querySelector('.incorrect');
    const correctCount = document.querySelector('.correct-count');
    const inCorrectCount = document.querySelector('.incorrect-count');
    let showCorrectCount;
    let showIncorrectCount;


    quizItem.id = question.questionId;

    questionText.innerHTML = question.questionText;

    question.options.forEach(option => {
        questionOptions.appendChild( renderOption(option) );
    });
    
    return res;


    function renderOption(option){
        const resOption = document.createElement('div');
        resOption.innerHTML = `
            <label>
                <span class="option-text"></span>
                <input type="radio">
            </label>`;
        
        const optionText = resOption.querySelector('.option-text');
        const checkbox = resOption.querySelector('input');

        optionText.innerHTML = option;
        checkbox.name = question.questionId;

        checkbox.addEventListener('change', e => {
            answer.classList.add('showAnswer');
            correct.classList.remove('showCorrect');
            incorrect.classList.remove('showIncorrect');

            if (question.correctAnswer === option) {
                correct.classList.add('showCorrect');
            } else {
                incorrect.classList.add('showIncorrect');
            }

            countResults();

        });

        countResults();

        return resOption;
    }

    function countResults() {
        showCorrectCount = document.querySelectorAll('.showCorrect').length;
        showIncorrectCount = document.querySelectorAll('.showIncorrect').length;
        correctCount.innerHTML = showCorrectCount;
        inCorrectCount.innerHTML = showIncorrectCount;
    }
}



