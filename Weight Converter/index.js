const inputEl=document.getElementById("pd");
const errMessage=document.getElementById("err");
const kgwtEl=document.getElementById("kgwt");

let errTime;
let resTime;

function updateResult() {
    if (inputEl.value < 0 || isNaN(inputEl.value)) {
        errMessage.innerText="Please enter a valid number !";
        clearTimeout(errTime);
        errTime=setTimeout(()=>{
            errMessage.innerText="";
            inputEl.value="";
        },2000)
    }else{
        kgwtEl.innerText=(+inputEl.value/2.2).toFixed(2);
        clearTimeout(resTime);
        resTime=setTimeout(()=>{
            kgwtEl.innerText="";
            inputEl.value="";
        },10000)
    }
}

inputEl.addEventListener("input",updateResult)