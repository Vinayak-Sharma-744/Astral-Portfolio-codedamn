let pointer = document.getElementById("pointer");

const gitHubLink = document.querySelector('#git');

const linkedinLink = document.querySelector('#link');

gitHubLink.addEventListener("click", clicker1);

function clicker1(){
    pointer.style.marginLeft = 171;
    
}

linkedinLink.addEventListener("click",clicker2)

function clicker2(){
    pointer.style.marginLeft = 200;
}