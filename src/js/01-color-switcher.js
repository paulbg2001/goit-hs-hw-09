const elements = {
    startBtn : document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop'),
};

let time = null;
let startBtnActive = false;
elements.stopBtn.disable = true;
elements.startBtn.addEventListener('click', onStartBtnClick );
elements.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick(){
    time = setInterval(changeColor ,1000);
    elements.stopBtn.disabled = false;
    if(!startBtnActive){
        elements.startBtn.disabled=true;
        elements.startBtn.removeEventListener('click', onStartBtnClick);
    }
}

function onStopBtnClick(){
    clearInterval(time);
    if(!startBtnActive){
        elements.startBtn.disabled = false;
        elements.startBtn.addEventListener('click', onStartBtnClick);
        elements.stopBtn.disabled = true;
    }
}

function changeColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
