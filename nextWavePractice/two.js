let h1Element=document.createElement('h1');
h1Element.textContent="Web Technologies";
let ele=document.getElementById("myContainer");
ele.appendChild(h1Element);
ele.style.backgroundColor="blue";
ele.style.alignContent="center";
let btnEle=document.createElement('button');
btnEle.textContent="chengeHeading";
btnEle.onclick=function(){
    h1Element.textContent="4.0 Technologies";
    h1Element.classList.add("heading");
}
ele.appendChild(btnEle);
let btnRem=document.createElement('button');
btnRem.textContent="removeStyles";
btnRem.onclick=function(){
    h1Element.textContent="4.0 Technologies";
    h1Element.classList.remove("heading");
}
ele.appendChild(btnRem);
//we add the styles to js file by using css class file by using classList atrribute
