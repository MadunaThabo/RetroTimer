
let timer = null;
let hours = 0;
let minutes = 0;
let seconds = 0;

window.onload = function() {
  const timerContainer = document.getElementById("timer-container");
  const timer = document.getElementById("timer");
  const startButton = document.getElementById("start-button");
  let intervalId;


  startButton?.addEventListener("click", startTimer);
  console.log("Hello World!");

  

  function startTimer() {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        let timerDisplay = document.getElementById("timer-display");
        startButton.innerHTML = "Stop";
        timerDisplay.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    }, 1000);
    
}

function stopTimer() {
    clearInterval(intervalId);
    if(timer!=null && timerContainer!=null && startButton!=null){
      startButton.innerHTML = "Start";
      startButton.removeEventListener("click", stopTimer);
      startButton.addEventListener("click", startTimer);
    }
  }
}

function stopTimer() {
  clearInterval(intervalId);
  if(timer!=null && timerContainer!=null && startButton!=null){
    startButton.innerHTML = "Start";
    startButton.removeEventListener("click", stopTimer);
    startButton.addEventListener("click", startTimer);
  }
}

// function newRceord() {
//   const buttonContainer = document.getElementById("buttonContainer");
//   const description = document.getElementById("description");
//   description.innerHTML = `
//   <input type="text" id="title" placeholder="Title">
//   <input type="text" id="Description" placeholder="Description">
//   <div id="timer-container">
//     <div id="timer"></div>
//     <button id="start-button">Start</button>
//   </div>
//   `;    
// }
