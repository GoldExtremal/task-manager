let task = '';
let completedTaskCount = 0;

function showTask(task) {
    (task === "") 
        ? console.log("Задача отсутствует")
        : console.log(task);
}

function setTask(taskDescription) {
    (task === "") 
        ? task = taskDescription
        : console.log("Не могу добавит задачу, завершите или удалите предыдущую")
}

function completeTask() {
    if (task === "") {
        console.log("Задача отсутствует");
        return
    }
    task = "";
    completedTaskCount++;
}

function deleteTask() {
    (task === "") 
        ? console.log("Задача отсутствует") 
        : task = "";
}