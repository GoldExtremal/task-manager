const tasks = [];
const completedTasks = [];

const task = {
    title: "qwerty",
    description: "Молоко, хлеб, яйца",
    isCompleted: true,
    createdDate:  new Date(2026, 3, 10),
    completedDate: new Date(2026, 3, 11)
};

// console.log(task.createdDate.getDate() + 10)

const task1 = {
    title: "Сходить на тренировку",
    description: "Молоко, хлеб, яйцFFа",
    isCompleted: false,
    createdDate: new Date(2026, 3, 4),
    completedDate: null
};

let completedTaskCount = 0;

function getTaskDescriptions() {
    return tasks.map( task => task.description)
}

function getLongTasks() {
    return tasks.filter( task => task.title.length < 10)
}

function getTaskByDateRange(startDate, endDate, isCompleted = false) {
    if (isCompleted) {
        return tasks.filter( task => {
            return (task.completedDate >= startDate) && (task.completedDate <= endDate) && (task.isCompleted)
        })
    } else {
        return tasks.filter( task => {
            return (task.createdDate >= startDate) && (task.createdDate <= endDate)
        })
    }
}

function clearShortTasks() {
    return tasks.filter( task => task.title.length > 5)
}

function changeTaskTitleFromIndexInTasksArray(index, newTitle) {
    tasks[index].title = newTitle;
}

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
    completedTask.completedDate = new Date();
    completedTasks.push(completedTask);
    completedTaskCount++;
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
// // showTask(tasks);
// console.log(tasks)
// setTimeout( () => {
//     deleteTask(1)
//     console.log(tasks);
// }, 5000);
// setTimeout( () => {
//     setTask(task1);
//     console.log(tasks);
// }, 10000);
// setTimeout( () => {
//     clearTasks();
//     console.log(tasks);
// }, 15000);
// console.log(getTaskDescriptions())
// console.log(getLongTasks())
const start = new Date(2026, 3, 1);
// const end = start.getDate() + 14;
const end = new Date( start.getFullYear(), start.getMonth(), start.getDate() + 14 );
// end.setDate(start.getDate() + 14);
// start.setDate(17);
console.log(start);
console.log(end);

console.log(getTaskByDateRange(start, end, true))