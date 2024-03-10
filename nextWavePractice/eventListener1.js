let inputEle = document.createElement("input");

function perform(event){
    console.log(event.key);
}
//event.type
//event.target
//event.key
inputEle.addEventListener('keydown',perform);
document.body.appendChild(inputEle);