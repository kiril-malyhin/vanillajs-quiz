var myQuestions = [
    {
        question: "What is 10/2?",
        number: 1,
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b',
        correct: 'Correct',
        incorrect: 'Incorrect'
    },
    {
        question: "What is 30/3?",
        number: 2,
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c',
        correct: 'Correct',
        incorrect: 'Incorrect'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');

generateQuiz(myQuestions, quizContainer, resultsContainer);

function showResults(quizContainer, resultsContainer, question, number, answer){
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var questions = myQuestions;
    var numCorrect = 0;
    var output = [];

    for(var i = 1; i < questions.length; i++){

        debugger;
        if(number === questions[i].number){
            if (letter === questions[i].correctAnswer) {
                numCorrect++;
                output.push(
                    '<div class="correct">' + questions[i].correct + '</div>'
                );
            } else {
                output.push(
                    '<div class="incorrect">' + questions[i].incorrect + '</div>'
                );
            }
        }

        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="correct">' + questions[i].correct + '</div>'
            + '<div class="incorrect">' + questions[i].incorrect + '</div>'
        );
    }

    quizContainer.innerHTML = output.join('');

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

function generateQuiz(questions, quizContainer, resultsContainer){

    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        for(var i = 0; i< questions.length; i++){

            answers = [];

            for(letter in questions[i].answers){

                question = questions[i];
                number = questions[i].number;

                answers.push(
                    '<label>'
                    + '<input type="radio" onclick="showResults(quizContainer, resultsContainer, question,number, letter)" name="'+number+'" value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }

    showQuestions(questions, quizContainer);

    // on submit, show results
    // showResults(questions, quizContainer, resultsContainer);

}