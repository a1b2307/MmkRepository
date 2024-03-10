let counter=document.getElementById("counter");
let onIncrement=()=>{
    let prevConuter=counter.textContent;
    let updateCounter=parseInt(prevConuter)+1;
    counter.textContent=updateCounter;
    if(updateCounter > 0){
        counter.style.color="green";
    }else if(updateCounter < 0){
        counter.style.color="red";
    }else{
        counter.style.color="blue";
    }
}
let onDecrement=()=>{
    let prevConuter=counter.textContent;
    let updateCounter=parseInt(prevConuter)-1;
    counter.textContent=updateCounter;
    if(updateCounter > 0){
        counter.style.color="green";
    }else if(updateCounter < 0){
        counter.style.color="red";
    }else{
        counter.style.color="blue";
    }
}
let onReset=()=>{
    //let prevConuter=counter.textContent;
    let updateCounter=0;
    counter.textContent=updateCounter;
    if(updateCounter > 0){
        counter.style.color="green";
    }else if(updateCounter < 0){
        counter.style.color="red";
    }else{
        counter.style.color="blue";
    }
}
