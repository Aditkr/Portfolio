
let input = document.getElementById('inputBox');
let btt = document.querySelectorAll('button');

let string = "";
let arr = Array.from(btt);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');


let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

startBtn.addEventListener('click', function () {
    string = "";
    input.value = string;
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function () {
    string = "";
    input.value = string;
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function () {
    string = "";
    input.value = string;
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;


    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}

let hrs = document.getElementById('hour');
let min = document.getElementById('minutes');
let sec = document.getElementById('second');
let ass = document.getElementById('assign');


setInterval(() => {

    let currentTime = new Date();
    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
   
    

    if( hrs.innerHTML > 12){
        ass.innerHTML = "PM"
        hrs.innerHTML = hrs.innerHTML-12;
    }
    if(hrs.innerHTML < 10){
        hrs.innerHTML = "0" + hrs.innerHTML;
    }
    if(min.innerHTML < 10){
        min.innerHTML = "0" + min.innerHTML;
    }
    if(sec.innerHTML < 10){
        sec.innerHTML = "0" + sec.innerHTML;
    }


}, 1000);


let inp = document.getElementById('inp');
let txt = document.getElementById('container');

function add(){
    
    if(inp.value = ""){
        alert("Please Enter Task")
    }else{
        let li = document.createElement('li');
        li.innerHTML = inp.value;
        txt.appendChild(li);
        
    }
    string = "";
    input.value = string;
}



