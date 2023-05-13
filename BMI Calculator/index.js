const btnEl=document.getElementById("btn");
const bmiEl=document.getElementById("bmi");
const weightCond=document.getElementById("weight-cond");


function calculateBMI(){
    const htVal=document.getElementById("height").value/100;
    const wtVal=document.getElementById("weight").value;

    bmiVal=wtVal/(htVal*htVal);
    bmiEl.value=bmiVal;

    if(bmiVal<18.5){
        weightCond.innerText="Underweight";
    }else if(bmiVal>=18.5 && bmiVal <=24.9){
        weightCond.innerText="Normal weight";
    }else if(bmiVal>=25&& bmiVal<=29.9){
        weightCond.innerText="Overweight";
    }else{
        weightCond.innerText="Obesity";
    }
}

btnEl.addEventListener("click",calculateBMI)