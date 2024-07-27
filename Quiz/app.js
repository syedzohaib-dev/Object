// var quizQuestions = [
//     {
//         question: "What does HTML stand for?",
//         option1: "Hyper Text Markup Language",
//         option2: "Home Tool Markup Language",
//         option3: "Hyperlinks and Text Markup Language",
//         option4: "Hyperlinking Text Marking Language",
//         correctAnswer: "Hyper Text Markup Language"
//     },
//     {
//         question: "Who is making the Web standards?",
//         option1: "Mozilla",
//         option2: "Microsoft",
//         option3: "The World Wide Web Consortium",
//         option4: "Google",
//         correctAnswer: "The World Wide Web Consortium"
//     },
//     {
//         question: "Choose the correct HTML element for the largest heading:",
//         option1: "heading",
//         option2: "h1",
//         option3: "h6",
//         option4: "head",
//         correctAnswer: "h1"
//     },
//     {
//         question: "What is the correct HTML element for inserting a line break?",
//         option1: "break",
//         option2: "lb",
//         option3: "br",
//         option4: "b",
//         correctAnswer: "br",
//         getFull: function () {
//             return console.log("lobster tek")
//         }
//     }


// ];

// checkProperty = "option1" in quizQuestions
// console.log(checkProperty)

// var index = 0
// var score = 0

// function renderQuestion() {
//     var quizBox = document.querySelector('.quizBox')
//     var options = document.getElementsByName('option')
//     if (!quizQuestions[index]) {
//         console.log("result ==> " + score)
//         return
//     }
//     for (var i = 0; i < options.length; i++) {
//         if (options[i].checked) {
//             console.log(options[i].value, quizQuestions[index - 1].correctAnswer)
//             if (options[i].value === quizQuestions[index - 1].correctAnswer) {
//                 score++
//             }
//             // console.log()
//         }
//     }

//     quizBox.innerHTML = `
//     <p>${quizQuestions[index].question}</p>
//         <div class="Option">
//             <label><input type="radio" name="option"value="${quizQuestions[index].option1}" id="">${quizQuestions[index].option1}</label>
//         </div>
//         <div class="Option">
//             <label><input type="radio" name="option" value="${quizQuestions[index].option2}">${quizQuestions[index].option2}</label>
//         </div>
//         <div class="Option">
//             <label><input type="radio" name="option" value="${quizQuestions[index].option3}">${quizQuestions[index].option3}</label>
//         </div>
//         <div class="Option">
//             <label><input type="radio" name="option" value="${quizQuestions[index].option4}">${quizQuestions[index].option4}</label>
//         </div>



// `
//     index++
// }


// renderQuestion()


// var obj = {
//     name: "zohaib",
//     email: "zohaib@gmail.com"
// }

// console.log(Object.entries(obj))
// console.log(Object.keys(obj))

// var keys = Object.keys(obj)

// for (var i = 0; i < keys.length; i++) {
//     console.log(obj[keys[i]])
// }

// var strObj = (JSON.stringify(obj))
// console.log(strObj)

// console.log(JSON.parse(strObj))

// function addName() {
//     var name = document.getElementById('name')
//     var storage = localStorage.getItem('students')
//     var arr = JSON.parse(storage)
//     console.log(arr)

//     if (!arr) {
//         arr = []
//     }



//     var student = {
//         name: name.value
//     }

//     arr.push(student)

//     localStorage.setItem("students", JSON.stringify(arr))
//     name.value = ""


//     // console.log(student)
// }

const quill = new Quill('#editor', {
    theme: 'snow'
});
