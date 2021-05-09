window.onload = function () {
  show(0);
};
function submit_form(e) {
  e.preventDefault();
  let name = document.forms["welcome_form"].value;
  sessionStorage.setItem("name", name);
  location.href = "quiz.html";
}

let questions = [
  {
    id: 1,
    question: "Where is india?",
    answer: "asia",
    options: ["Europe", "Asia", "Africa", "none of these"],
  },
  {
    id: 2,
    question: "Where is america?",
    answer: "asia",
    options: ["Europe", "Asia", "Africa", "none of these"],
  },
];
let question_count = 0;
function next() {
  question_count++;
  show(question_count);
}
function show(count) {
  let question = document.getElementById("question");
  // question.innerHTML = "<h2>" + questions[count].question + "</h2>";[0]
  question.innerHTML = `<h2>${questions[count].question}</h2>
  <ul class="option_group">
                        <li class="option">${questions[count].options[0]}</li>
                        <li class="option">${questions[count].options[1]}</li>
                        <li class="option">${questions[count].options[2]}</li>
                        <li class="option">${questions[count].options[3]}</li>
                    </ul>`;
}
