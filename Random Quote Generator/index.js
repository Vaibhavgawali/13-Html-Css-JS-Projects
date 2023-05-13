const btnEl=document.getElementById("btn");
const quoteEl=document.getElementById("quote");
const authorEl=document.getElementById("author");

const url="http://api.quotable.io/random";

async function getQuote(){
    try {
        btnEl.innerText="Loading...";
        btnEl.disabled=true;
        quoteEl.innerText="Updating..."
        const result=await fetch(url).then((res)=>res.json());
        // console.log(result.content);
        quoteEl.innerText=result.content;
        authorEl.innerText=`~ ${result.author}`
        btnEl.innerText="Get a quote";
        btnEl.disabled=false;
    } catch (error) {
        // console.log(error);
        quoteEl.innerText="An error occured ,try again later";
        authorEl.innerText="an error"
        btnEl.innerText="Get a quote";
        btnEl.disabled=false;
    }
}
// getQuote();

btnEl.addEventListener("click",getQuote)