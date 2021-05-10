let nam=sessionStorage.getItem("name");
let points=sessionStorage.getItem("points");
let user_time=sessionStorage.getItem("time")

document.querySelector(".name").innerHTML=nam;
document.querySelector(".point").innerHTML=points;
document.querySelector(".time").innerHTML=user_time;