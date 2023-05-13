const btnEl=document.getElementById("btn");
const animeCont=document.getElementById("anime-cont");
const animeImg=document.getElementById("anime-img");
const animeName=document.getElementById("anime-name");

const urlImg="https://api.catboys.com/img";
async function picGenerate(){
    try {
        btnEl.disabled=true;
        btnEl.innerText="Loading...";
        animeName.innerText="Updating...";
        animeImg.src="spinner.svg";
        const result=await fetch(urlImg).then((res)=>res.json());
        console.log(result.url);
        animeCont.style.display="block";
        animeImg.src=result.url;
        animeName.innerText=result.artist;
        btnEl.innerText="Get Anime";
        btnEl.disabled=false;
    } catch (error) {
        // console.log(error);
        btnEl.disabled=false;
        btnEl.innerText="Get Anime";
        animeImg.src="spinner.svg";
        animeName.innerText="An error occured,please try again later";
    }
}

btnEl.addEventListener("click",picGenerate)