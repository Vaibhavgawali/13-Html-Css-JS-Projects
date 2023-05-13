const hrEl=document.getElementById("hour");
const mnEl=document.getElementById("minute");
const secEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");

function currentTime(){
const time=new Date();

let ampm="AM"
let hour=0
if(time.getHours()>12){
    hour=time.getHours()-12;
    ampm="PM";
}

const minute=time.getMinutes();
const seconds=time.getSeconds();

hrEl.innerText=(hour<10)?`0${hour}`:hour;
mnEl.innerText=(minute<10)?`0${minute}`:minute;
secEl.innerText=(seconds<10)?`0${seconds}`:seconds; 
ampmEl.innerText=ampm;   

setTimeout(function(){currentTime()},1000)
}

currentTime();
