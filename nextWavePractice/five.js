let textContainer = document.getElementById("userText");
let btnEle =document.getElementById("saveButton");
btnEle.onclick=function(){
    let textContent = textContainer.value;
    localStorage.setItem("textContent",textContent);
}

let actualText = localStorage.getItem("textContent");
if(actualText === null){
    textContainer.value="";
}
else{
    textContainer.value=actualText;
}