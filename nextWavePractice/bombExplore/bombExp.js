let timerEle = document.getElementById("timer");
let defuserEle = document.getElementById("defuser");



let countDown = 10;
let intervalId = setInterval(function(){
    countDown = countDown - 1;
    timerEle.textContent=countDown;
    if(countDown === 0){
        timerEle.textContent="BOOM";
        clearInterval(intervalId);
    }
},1000);

defuser.addEventListener('keydown',function(event){
    let defuserEleText=defuserEle.value;
    if(event.key === "Enter" && defuserEleText === "defuse" && countDown !== 0){
        timerEle.textContent="you did it!!";
        clearInterval(intervalId);
    }
});