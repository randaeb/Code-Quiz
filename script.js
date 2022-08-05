var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var question = document.getElementById("question");
var start = document.getElementById("startbtn");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var counter = 0
var input = document.getElementById("initials");
var save = document.getElementById("save");

var questions = [
  {
    question: "Question 1", 
    choices: ["a", "b", "c", "d"],
    answer: "a"
  },
  {
    question: "Question 2", 
    choices: ["aa", "bb", "cc", "dd"],
    answer: "aa"
  },  
]

start.addEventListener("click", function(){
section1.classList.add("hidden")
section2.classList.remove("hidden")
renderQuestion () 

})
function renderQuestion(event) {
question.textContent = questions[counter].question;
choice1.textContent = questions[counter].choices[0];
choice2.textContent = questions[counter].choices[1];
choice3.textContent = questions[counter].choices[2];
choice4.textContent = questions[counter].choices[3];
counter ++
}

choice1.addEventListener("click", renderQuestion);
choice2.addEventListener("click", renderQuestion);
choice3.addEventListener("click", renderQuestion);
choice4.addEventListener("click", renderQuestion);