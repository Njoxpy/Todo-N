const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("task-list");

// create a function for handling user input
function addTask() {
    if(inputBox.value === ''){
        alert("Jaza  kitu!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
}