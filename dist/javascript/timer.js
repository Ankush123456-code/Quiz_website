let dt = new Date(new Date().setTime(0));
let time = dt.getTime();
let second = Math.floor((time % (100 * 60)) / 1000);
let miniute = Math.floor((time % (100 * 60 * 60)) / (1000 * 60));
let timex = 0;
let mytime=setInterval(function () {
    if (second < 60) {
        second++;
    } else {

        miniute++;
        second = 0;
    }
    let formatted = second < 10 ? `0${second}` : `${second}`;
    let formatee = miniute < 10 ? `0${miniute}` : `${miniute}`
    document.querySelector(".time").innerHTML = `${formatee} : ${formatted}`;


}, 1000)