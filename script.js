const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const taskContainer = document.querySelector('.tasks-container')

const validateInput = () =>  inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputisvalid = validateInput();

    if(!inputisvalid) {
     return inputElement.classList.add("error");
    }

    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');

    const taskContent = document.createElement('p');
    taskContent.innerText = inputElement.value;

    taskContent.addEventListener('click', () => handleclick())

    const deleteItem = document.createElement("i")
    deleteItem.classList.add("far");
    deleteItem.classList.add("fa-trash-alt");

    deleteItem.addEventListener('click', () => 
        handleDeleteClick(taskItemContainer, taskContent))

    taskItemContainer.appendChild(taskContent)
    taskItemContainer.appendChild(deleteItem)

    taskContainer.appendChild(taskItemContainer);

    inputElement.value = "";
};

const handleclick = (taskContent) => {
    const tasks = taskContainer.childNodes;

    for (const task of tasks) {
        const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent)

        if (currentTaskIsBeingClicked) {
            task.firstChild.classList.toggle("completed");
        }
    }
};

const handleDeleteClick = (taskItemContainer, taskContent) => {
    const tasks = taskContainer.childNodes;

    for (const task of tasks) {
        const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent)

        if (currentTaskIsBeingClicked) {
            taskItemContainer.remove();
        }
    }
};

const handleInputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid) {
        return inputElement.classList.remove("error");
    }
}

addTaskButton.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange())
