var quizQuestions = [
    {
        question: "What does HTML stand for?",
        option1: "Hyper Text Markup Language",
        option2: "Home Tool Markup Language",
        option3: "Hyperlinks and Text Markup Language",
        option4: "Hyperlinking Text Marking Language",
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Who is making the Web standards?",
        option1: "Mozilla",
        option2: "Microsoft",
        option3: "The World Wide Web Consortium",
        option4: "Google",
        correctAnswer: "The World Wide Web Consortium"
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        option1: "heading",
        option2: "h1",
        option3: "h6",
        option4: "head",
        correctAnswer: "h1"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "break",
        option2: "lb",
        option3: "br",
        option4: "b",
        correctAnswer: "br"
    }


];

var index = 0

function renderQuestion() {
    var quizBox = document.querySelector('.quizBox')
    var options = document.getElementsByName('option')
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            console.log(options[i].value)
        }
    }
    quizBox.innerHTML = `
    <p>${quizQuestions[index].question}</p>
        <div class="Option">
            <label><input type="radio" name="option"value="${quizQuestions[index].option1}" id="">${quizQuestions[index].option1}</label>
        </div>
        <div class="Option">
            <label><input type="radio" name="option" id="${quizQuestions[index].option2}">${quizQuestions[index].option2}</label>
        </div>
        <div class="Option">
            <label><input type="radio" name="option" id="${quizQuestions[index].option3}">${quizQuestions[index].option3}</label>
        </div>
        <div class="Option">
            <label><input type="radio" name="option" id="${quizQuestions[index].option4}">${quizQuestions[index].option4}</label>
        </div>

        

`
    index++
}


renderQuestion()