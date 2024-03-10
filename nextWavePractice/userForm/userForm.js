let formEle = document.getElementById("myForm");
formEle.addEventListener("submit",function(event){
    event.preventDefault();
});
let nameEle = document.getElementById("name");
let paraEle = document.getElementById("nameErrMsg");
nameEle.addEventListener("blur",function(event){
    if(event.target.value === ""){
        paraEle.textContent = "Required*";
    }else{
        paraEle.textContent = "";
    }
});
let emailEle = document.getElementById("email");
let paraEle1 = document.getElementById("emailErrMsg");
nameEle.addEventListener("blur",function(event){
    if(event.target.value === ""){
        paraEle1.textContent = "Required*";
    }else{
        paraEle1.textContent = "";
    }
});