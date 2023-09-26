// Iteration 2: Generate 2 random number and display it on the screen

const num1 = document.querySelector("#number1");
let num1box = Math.round(Math.random()*100);
num1.innerHTML = num1box;

const num2 = document.querySelector("#number2");
let num2box = Math.round(Math.random()*100);
num2.innerHTML = num2box;


// Iteration 3: Make the options button functional

const greaterThan = document.querySelector("#greater-than");

const equalsTo = document.querySelector("#equal-to");

const smallerThan = document.querySelector("#lesser-than");

var score = 0

greaterThan.onclick = () => {
 if (num1box > num2box) {
    score++;
    resetTime(timerId)
 } else {
    location.href = "./gameover.html";
 }
 num1box = Math.round(Math.random()*100);
 num1box.innerHTML = num1;

 num2box = Math.round(Math.random()*100);
  num2box.innerHTML = num2;
};

equalsTo.onclick = () => {
 if (num1box == num2box) {
    score++;
    resetTime(timerId)
 } else {
    location.href = "./gameover.html";
 }
 num1box = Math.round(Math.random()*100);
 num1box.innerHTML = num1;

 num2box = Math.round(Math.random()*100);
  num2box.innerHTML = num2;
};

smallerThan.onclick = () => {
 if (num1box < num2box) {
    score++;
    resetTime(timerId)
 } else {
    location.href = "./gameover.html";
 }
 num1box = Math.round(Math.random()*100);
 num1box.innerHTML = num1;

 num2box = Math.round(Math.random()*100);
  num2box.innerHTML = num2;
};


// Iteration 4: Build a timer for the game

var time = 5;
var timer = document.querySelector("#timer");
var timerId;

function startTimer() {
    time = 5;
    timer.innerHTML = time;
    timerId = setInterval(() =>{
        time--;
        if (time==0){
            location.href = "./gameover.html"
        }
        timer.innerHTML = time;
    },1000);
    localStorage.setItem("score", score);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();