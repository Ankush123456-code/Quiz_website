window.onload = function () {
  show(0);
};
function submit_form(e) {
  e.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;
  sessionStorage.setItem("name", name);
  location.href = "quiz.html";
}

/// ///////////////////////////////////////////
// yeha maine hard code kiya hai

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

////////////////////////////////////////////////

let question_count = 0;
let points = 0;
function next() {
  let user_answer = document.querySelector("li.option.active").innerHTML;
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", `${miniute} minutes and ${second}`)
    clearInterval(mytime);
    location.href = "finish.html";

    return;
  }

  question_count++;
  show(question_count);
}
function show(count) {
  let question = document.getElementById("question");

  question.innerHTML = `<h2>Q${question_count + 1}. ${questions[count].question}</h2>
  <ul class="option_group">
                        <li class="option">${questions[count].options[0]}</li>
                        <li class="option">${questions[count].options[1]}</li>
                        <li class="option">${questions[count].options[2]}</li>
                        <li class="option">${questions[count].options[3]}</li>
                    </ul>`;
  toggle_active();
}
function toggle_active() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let j = 0; j < option.length; j++) {
        if (option[j].classList.contains("active")) {
          option[j].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
