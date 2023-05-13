const btnEl=document.getElementById("btn");
const emojinameEl=document.getElementById("e-name");

const emoji=[]

async function getEmoji(){
    let url="https://emoji-api.com/emojis?access_key=08af2ca4a222f7bccd648e7861a9acf75683a144";
    let result=await fetch(url).then((res) =>res.json());
    // console.log(result);
    // console.log(result[0].character);
    // console.log(result[0].unicodeName);

    for (let i = 0; i < 1500; i++) {
        emoji.push({
            emojiName:result[i].character,
            emojiCode:result[i].unicodeName
        })   
    }

}
getEmoji();
// console.log(emoji);

btnEl.addEventListener("click",()=>{
    const randomNum=Math.floor(Math.random()*emoji.length);
    // console.log(randomNum);
    btnEl.innerText=emoji[randomNum].emojiName;
    emojinameEl.innerText=emoji[randomNum].emojiCode;
})