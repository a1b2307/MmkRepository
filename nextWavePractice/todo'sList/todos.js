let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addButton");
let savebutton = document.getElementById("savebutton");

function getTodoList(){
  let stringifyTodoList=localStorage.getItem("todoList");
  let parsedTodoList=JSON.parse(stringifyTodoList);
  if(parsedTodoList === ""){
    return [];
  }else{
    return parsedTodoList;
  }
}

let todoList = getTodoList();

savebutton.onclick=function(){
  localStorage.setItem("todoList",JSON.stringify(todoList));
}

addTodoButton.onclick=function(){
  addUserInput();
}

function onStatusChange(labelId,checkid,todoId){
  let checkEle=document.getElementById(checkid);
  let labelEle=document.getElementById(labelId);
  labelEle.classList.toggle("checked");
  let todoObjIndex=todoList.findIndex(function(eachTodo){
    let eachTodoId="todo"+eachTodo.uno;
    if(eachTodoId === todoId){
      return true;
    }else{
      return false;
    }
  });
  let todoObject=todoList[todoObjIndex];
  if(todoObject.isCheck === true){
        todoObject.isCheck=false;
    }else{
        todoObject.isCheck=true;
    }
}



function onDelete(todoId){
  let todoElement=document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);
  let deleteIndex=todoList.findIndex(function(eachTodo){
    let eachTodoId = "todo" + eachTodo.uno;
    if(eachTodoId === todoId){
      return true;
    }else{
      return false;
    }
  });
  todoList.splice(deleteIndex,1);
}


function createAndAppendTodo(todo) {
  let checkid="checkbox"+todo.uno;
  let labelId="label"+todo.uno;
  let todoId="todo"+todo.uno;

  let todoElement = document.createElement("li");
  todoElement.id=todoId;
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.onclick=function(){
    onStatusChange(labelId,checkid,todoId);
  }
  inputElement.type = "checkbox";
  inputElement.id = checkid;
  inputElement.checked=todo.isCheck;
  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.id=labelId;
  labelElement.setAttribute("for", checkid);
  labelElement.classList.add("checkbox-label");
  if(todo.isCheck === true){
    labelElement.classList.add("checked");
  }
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.onclick=function(){
    onDelete(todoId);
  }
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteIconContainer.appendChild(deleteIcon);
}

function addUserInput(){
  let todoCount=todoList.length;
  todoCount=todoCount+1;

  userInput=document.getElementById("todoUserInput");
  userInputValue=userInput.value;

  if(userInputValue === ""){
    alert("enter valid text");
    return;
  }

  let newTodo={
    text:userInputValue,
    uno:todoCount,
    isCheck:false
  }

  todoList.push(newTodo);

  createAndAppendTodo(newTodo);
  userInput.value="";
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}


