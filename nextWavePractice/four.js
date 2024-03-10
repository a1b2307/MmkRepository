let bgContainer=document.createElement("div");
bgContainer.classList.add("container");
document.body.appendChild(bgContainer);

let headingEle=document.createElement("h1");
headingEle.classList.add("heading");
headingEle.textContent="Grocery List";
bgContainer.appendChild(headingEle);

let listContainer=document.createElement("ul");
listContainer.classList.add("list-container");
bgContainer.appendChild(listContainer);

let grItems=["milk","chocolates","fruits","vegetables","sweets"];
for(let item of grItems){
    let listItem=document.createElement("li");
    listItem.textContent=item;
    listContainer.appendChild(listItem);
}

let checkEle=document.createElement("input");
checkEle.type="checkbox";
checkEle.id="itemCheck";
checkEle.classList.add("form-check-input");
bgContainer.appendChild(checkEle);