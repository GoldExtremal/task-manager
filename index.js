const tasks = [];
const completedTasks = [];

const task = {
    title: "Купить продукты",
    description: "Молоко, хлеб, яйца",
    isCompleted: false,
    createdDate: new Date(),
    completedDate: null
};

const task1 = {
    title: "Сходить на тренировку",
    description: "Молоко, хлеб, яйца",
    isCompleted: true,
    createdDate: new Date(),
    completedDate: null
};

let completedTaskCount = 0;

function showTask(tasks) {
    (tasks.length === 0)
        ? console.log("Задача отсутствует")
        : tasks.forEach(task => console.log(JSON.stringify(task)));;
}

function setTask(taskDescription) {
    const task = { ...taskDescription };
    tasks.push(task);

    // (task === "") ? task = taskDescription : console.log("Не могу добавит задачу, завершите или удалите предыдущую")
}

function completeTask(index) {
    const completedTask = tasks[index];
    completedTask.isCompleted = true;
    completedTask.completedDate = Date.now();
    completedTasks.push(completedTask);
    completedTaskCount++;

    // if (task === "") {
    //     console.log("Задача отсутствует");
    //     return
    // }
    // task = "";
}

function deleteTask(index) {
    if (typeof index !== "number") return
    const task = tasks[index];
    if (!task.isCompleted) {
        const isApprove = prompt('Таска ещё не выполнена, удалить?', 'да/нет');
        if (isApprove === 'да') {
            tasks.splice(index, 1);
        }else if (isApprove === 'нет') {
            return
        }
    } else {
        tasks.splice(index, 1);
    }

    // (task === "")
    //     ? console.log("Задача отсутствует")
    //     : task = "";
}

function clearTasks() {
    tasks.splice(0)
}

setTask(task);
setTask(task1);
// showTask(tasks);
console.log(tasks)
setTimeout( () => {
    deleteTask(1)
    console.log(tasks);
}, 5000);
setTimeout( () => {
    setTask(task1);
    console.log(tasks);
}, 10000);
setTimeout( () => {
    clearTasks();
    console.log(tasks);
}, 15000);