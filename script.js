const input = document.getElementById("content");
const add = document.getElementById("addbtn");
const emptytask = document.getElementById("no-task");
const list = document.getElementById("task");

function displayList() {
    if (input.value.trim() === "") return;

    emptytask.style.display = "none";
    
    const tasks = document.createElement("li");
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    

 
    const taskText = document.createElement("span");
    taskText.innerText = " " + input.value;
    checkbox.addEventListener("change", function() {
        taskText.style.textDecoration = this.checked ? "line-through" : "none";
        tasks.style.color = this.checked ? "white" : "black";
    });
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.style.marginLeft = "10px";
    
    delBtn.onclick = function() {
        tasks.remove();
        if (list.children.length === 0) {
            emptytask.style.display = "block";
        }
    };


    tasks.appendChild(checkbox);
    tasks.appendChild(taskText);
    tasks.appendChild(delBtn);

    list.appendChild(tasks);
    input.value = "";
}

add.addEventListener("click", displayList);
