const allTasks = []

function createTask(taskName) {
    const formattedTask = taskName.charAt(0).toUpperCase() + taskName.slice(1)

    taskObj = {
        description: formattedTask,
        checked: false
    }

    console.clear();
    console.log(formattedTask);
    console.log(allTasks);
    // allTasks.filter((task)=>{
    //     console.log(task);
    //     console.log(formattedTask);
    //     return task != formattedTask

    // }).push(taskObj)

    allTasks.push(taskObj)

    showTasksInScreen()
}

function showTasksInScreen() {
    
    let onGoingTaskGrid = document.getElementById('onGoingTaskGrid')

    sortArray(allTasks)

    var newOnGoingTaskGrid = `<ul class="onGoingTaskGrid"> `

    allTasks.forEach((task) => {
        newOnGoingTaskGrid += `<li id="taskBox"><input type="checkbox"><p>${task.description}</p></li>`
    })

    newOnGoingTaskGrid += `</ul>`

    onGoingTaskGrid.innerHTML = newOnGoingTaskGrid

    addListenerToInputs()
}

function onGoingTasksHandler(taskUncheck) {

    // allTasks.filter((task)=>{
    //     task.description === taskChecked.parentElement.lastElementChild
    //     task.checked = false
    // })
    
    onGoingTaskGrid.firstChild.appendChild(taskUncheck.parentElement)
}
function completedTasksHandler(taskChecked) {
    let completedTaskGrid = document.getElementById('completedTaskGrid')
    // allTasks.filter((task)=>{
    //     task.description === taskUncheck.parentElement.lastElementChild
    //     task.checked = true
    // })
    completedTaskGrid.appendChild(taskChecked.parentElement)
}