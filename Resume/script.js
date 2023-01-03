const container = document.getElementById('container');
const starter = document.getElementById('starter');
const startBtn = document.getElementsByClassName('startBtn')

function clickhandler(){
    starter.style.display = 'none';
    container.hidden = false;
    console.log('click')
};

// startBtn returns html collection
for (let i = 0 ; i < startBtn.length; i++) {
    startBtn[i].addEventListener('click' ,clickhandler ) ; 
 }
