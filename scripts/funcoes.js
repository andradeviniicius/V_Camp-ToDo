const allTasks = []

function createTask(taskName) {
    const formattedTask = taskName.charAt(0).toUpperCase()+taskName.slice(1)

    taskObj = {
        description: formattedTask,
        checked: false
    }
    
    allTasks.push(taskObj)

    showTasksInScreen()
}

function showTasksInScreen() {

    let onGoingTaskGrid = document.getElementById('onGoingTaskGrid')
    let completedTaskGrid = document.getElementById('completedTaskGrid')

    sortArray(allTasks)


    
    let newCompletedTaskGrid = `<ul class="completedTaskGrid">`
    let newOnGoingTaskGrid = `<ul class="onGoingTaskGrid">`

    allTasks.forEach((task) => {
        if(task.checked==true){
            newCompletedTaskGrid += `<li id="taskBox"><input type="checkbox"><p>${task.description}</p></li>`
        } else {
            newOnGoingTaskGrid += `<li id="taskBox"><input type="checkbox"><p>${task.description}</p></li>`
        }
    })

    newOnGoingTaskGrid += `</ul>`
    completedTaskGrid += `</ul>`

    onGoingTaskGrid.innerHTML = newOnGoingTaskGrid
    completedTaskGrid.innerHTML = newCompletedTaskGrid
    addListenerToInputs()
}

function onGoingTasksHandler(taskUncheck) {
    allTasks[allTasks.findIndex(task=>{return task.description === taskUncheck.lastElementChild.innerText})].checked = false
    
    showTasksInScreen()
}
function completedTasksHandler(taskChecked) {
    allTasks[allTasks.findIndex(task=>{return task.description === taskChecked.lastElementChild.innerText})].checked = true
    
    showTasksInScreen()
}