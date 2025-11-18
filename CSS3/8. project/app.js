let works =["java fullstack devloper","MERN stack developer","front end developer",];
let wBlk = document.getElementById("work");

setInterval(function(){
    let id = Math.floor(Math.random()*2);
    wBlk.innerText = works[id];
},3000)