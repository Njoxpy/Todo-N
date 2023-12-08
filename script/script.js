// select an element into the various field(input, button and orderedLists field)
const inputTask = document.getElementById('input-task');
const submitButton = document.getElementById('submit-button');
const taskAdded = document.getElementById('ordered-task');
const value = inputTask.value;
console.log(value);

// creating elements
const ul = document.querySelector('ul');
const listItem = document.createElement('li');
ul.append(listItem);
