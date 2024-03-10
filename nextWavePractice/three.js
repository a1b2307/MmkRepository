let inputEle=document.createElement("input");
inputEle.type="checkbox";
inputEle.id="role";

document.body.appendChild(inputEle);

let lblEle=document.createElement('label');
lblEle.htmlFor="role";
lblEle.textContent="Graduated";

document.body.appendChild(lblEle);