const data = [
    {
        questionId: 'question1',
        correctAnswerId: 'var1',
    }
];

function checkAnswer(questionId, variantId) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].questionId === questionId) {
            if (data[i].correctAnswerId === variantId) {
                let question = document.getElementById(questionId);

                let correct = question.getElementsByClassName('correct');
                correct[0].classList.add('showCorrect');
            } else {
                let question = document.getElementById(questionId);
                let incorrect = question.getElementsByClassName('incorrect');
                incorrect[0].classList.add('showIncorrect');
            }
        }
    }
}


