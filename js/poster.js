const randomC = () => Math.floor(Math.random() * 5) + 0;
let link;
const bg=document.querySelectorAll('.poster')
bg.forEach(e=>{
    setInterval(() => {
       
        switch (randomC()) {
    case 0: e.src = 'image/poster/demon-slayer.jpg'
        break;
    case 1: e.src = 'image/poster/kaori.jpg'
        break;
    case 2: e.src = 'image/poster/linux.jpg'
        break;
    case 3: e.src = 'image/poster/love.jpg'
        break;
    case 4: e.src = 'image/poster/mitsuha.jpg'
        break;
    default: e.style.backgroundColor = white
        break;
}

    }, 1500);
    
})