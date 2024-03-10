// Add task function
function addTask(boxId) {
    var taskInput = document.getElementById(boxId).querySelector('input[type="text"]');
    var task = taskInput.value;
    taskInput.value = '';

    var newItem = document.createElement('div');
    newItem.textContent = task;
    newItem.draggable = true;
    newItem.style.fontSize = "x-large";
    newItem.addEventListener('dragstart', function(event) {
        drag(event);
    });

    document.getElementById(boxId).querySelector('.task-container').appendChild(newItem);
}

function handleKeyPress(event, boxId) {
    if (event.key === "Enter") {
        addTask(boxId);
    }
}

// Drag and drop functions
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.textContent);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var newItem = document.createElement('div');
    newItem.textContent = data;
    newItem.draggable = true;
    newItem.addEventListener('dragstart', function(event) {
        drag(event);
    });

    event.target.appendChild(newItem);
}
