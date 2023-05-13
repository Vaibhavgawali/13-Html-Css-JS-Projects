const btnEl=document.getElementById("btn");
const jokeEl=document.getElementById("joke");

const apiKey="pffcjymNbw3buT5ZjU4+YA==nOK8VkJzSuGKtmJu";
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey
    }
}
const apiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    try {
        jokeEl.innerText="Updating..."
        btnEl.disabled=true;
        btnEl.innerText="Loading..."
        const response=await fetch(apiUrl,options);
        const data=await response.json();
        const actualJoke=data[0].joke;
        jokeEl.innerText=actualJoke;
        btnEl.disabled=false;
        btnEl.innerText="tell me a joke"
    } catch (error) {
        jokeEl.innerText="An error happened ,try again later";
        btnEl.disabled=false;
        btnEl.innerText="tell me a joke"
        // console.log(error);  
    } 
}


btnEl.addEventListener("click",getJoke);