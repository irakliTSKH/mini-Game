const cube = document.getElementById("cube");
let score = document.getElementById("score");
let timer = document.getElementById("timer");
const container = document.getElementById("container");
const won = document.getElementById("won");
const btnReload = document.getElementById("btn-reload");
let realTime = 35;
let realScore = 20;
const clickSound = new Audio("sound/clicksound.wav");
const backgroundSound = new Audio("sound/backgroundSound.mp3");


// click event start
cube.addEventListener("click", () => {
    clickSound.play();
    realTime += 1;
    realScore--;
    score.innerHTML = "Click Left :" + realScore;

    // random px
    let RandomX = Math.round((Math.random() * 2 - 1) * 965);    // < div.width
    let RandomY = Math.round((Math.random() * 2 - 1) * 465);    // < div.height
    cube.style.marginLeft = RandomX + "px";
    cube.style.marginTop = RandomY + "px";

    //  random cube size
  let RandomSize =  Math.floor(Math.random() * 50);
  if (RandomSize < 20 ){
      RandomSize = 20 ;
      cube.style.width = RandomSize + "px"; 
      cube.style.height = RandomSize + "px"; 
      } else {
     cube.style.width = RandomSize + "px"; 
     cube.style.height = RandomSize + "px"; 
    };
  
  // color settings
    switch (realScore){
        case 19:
          container.style.backgroundColor = "black";
          cube.style.backgroundColor = "rgb(41, 39, 39)";
          break;
        case 17:
          container.style.backgroundColor = "red";
          cube.style.backgroundColor = "rgb(214, 88, 88)";
          break;
        case 14:
          container.style.backgroundColor = "green";
          cube.style.backgroundColor = "rgb(12, 141, 12)";
          break;
        case 9:
          container.style.backgroundColor = "blue";
          cube.style.backgroundColor = "rgb(77, 77, 233)";
         break;
        case 6:
          container.style.backgroundColor = "yellow";
          cube.style.backgroundColor = "rgb(236, 227, 91)";
          break;
        case 0:

          stopTimer ();
          container.style.display = "none";
          cube.style.display = "none";
          won.style.display = "block";
          btnReload.style.display = "block";
          backgroundSound.pause();
    };
});
// click event end


let interval = setInterval(startTimer, 400);

function startTimer () {
    realTime--;
    if (realTime < 10) {
      timer.style.color = "red";
  };
    backgroundSound.play();
    timer.textContent = "Time : " + realTime;
    if (realTime < 1){
        stopTimer ();
        container.style.display = "none";
        cube.style.display = "none";
        won.style.display = "block";
        won.innerHTML = "Game Over";
        btnReload.style.display = "block";
        backgroundSound.pause();
    };
};

function stopTimer (){
  clearInterval(interval);
};

btnReload.addEventListener("click", () => window.location.reload());





