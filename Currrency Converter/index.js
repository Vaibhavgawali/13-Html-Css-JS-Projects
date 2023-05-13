const CurrencyFirst = document.getElementById("currency-first");
const CurrencySecond = document.getElementById("currency-second");

const WorthFirst = document.getElementById("worth-first");
const WorthSecond = document.getElementById("worth-second");

const ExchangeRate=document.getElementById("exchange");

async function updateRate(){
    // console.log("called");
    await fetch(`https://v6.exchangerate-api.com/v6/ea3fdba38c5bb89fc59b3ace/latest/${CurrencyFirst.value}`)
    .then((res)=>res.json())
    .then(data=>{
        const rate =data.conversion_rates[CurrencySecond.value];
        console.log(rate);
       
        ExchangeRate.innerText=`1 ${CurrencyFirst.value} = ${rate+" "+CurrencySecond.value}`
    
        WorthSecond.value=(WorthFirst.value * rate).toFixed(2);
    });
}

CurrencyFirst.addEventListener("change",updateRate)

CurrencySecond.addEventListener("change",updateRate)

WorthFirst.addEventListener("input",updateRate)