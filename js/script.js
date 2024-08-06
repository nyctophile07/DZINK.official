const nav=document.getElementById('ham')
const navlink=document.querySelector('.navlink')
const whitebg=document.querySelector('.whitebg')

const tog=()=>{
    navlink.classList.toggle('active')
    whitebg.classList.toggle('hide')
}
nav.addEventListener('click',tog)
whitebg.addEventListener('click',tog)