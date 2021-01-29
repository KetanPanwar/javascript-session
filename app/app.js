function delete_event(e) {
  const ele = e.target;
  
  if (ele.classList[0] === "done-bt") {
    const todo = ele.parentElement;
    
    for(var i=0;i<todo.childNodes.length;i++)
    {
        if(todo.childNodes[i].className==='item')
        {
            var str=todo.childNodes[i].innerText;
            var result = str.fontcolor("white");
            todo.childNodes[i].innerHTML=result
            todo.style.backgroundColor = "green";

        }
    }
  }
  if (ele.classList[0] === "delete-bt") {
    const todo = ele.parentElement;
      todo.remove();
  }
}


function add_event(e) {
  e.preventDefault();
  const main_div = document.createElement("div");
  main_div.classList.add("todo");
  const new_item = document.createElement("li");
  var temp=userInput.value.toString();
  new_item.innerText = temp;
  new_item.classList.add("item");
  new_item.style.color="red";
  main_div.appendChild(new_item);
  userInput.value = "";
  const complete_bt = document.createElement("button");
  complete_bt.innerHTML = 'Done';
  complete_bt.classList.add("done-bt");
  main_div.appendChild(complete_bt);
  const deletebt = document.createElement("button");
  deletebt.innerHTML = "Delete";
  deletebt.classList.add("delete-bt");
  main_div.appendChild(deletebt);
  list.appendChild(main_div);
}

const userInput = document.querySelector(".todo-input");
const addBt = document.querySelector(".todo-button");
const list = document.querySelector(".todo-list");
addBt.addEventListener("click", add_event);
list.addEventListener("click", delete_event);

