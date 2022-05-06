const onGoingTasks = []
const completedTasks = []

function createTask(taskName) {
    const formattedTask = taskName.charAt(0).toUpperCase() + taskName.slice(1)

    taskObj = {
        description: formattedTask,
        checked: false
    }

    
    onGoingTasks.push(taskObj)

    showTasksInScreen()
}

function showTasksInScreen() {

    let onGoingTaskGrid = document.getElementById('onGoingTaskGrid')

    sortArray(onGoingTasks)

    let newOnGoingTaskGrid = `<ul class="onGoingTaskGrid"> `

    onGoingTasks.forEach((task) => {
        if(task.checked===true){

        } else {
            newOnGoingTaskGrid += `<li id="taskBox"><input type="checkbox"><p>${task.description}</p></li>`
        }
    })

    newOnGoingTaskGrid += `</ul>`

    onGoingTaskGrid.innerHTML = newOnGoingTaskGrid
    addListenerToInputs()
}

function onGoingTasksHandler(taskUncheck) {
    onGoingTasks[onGoingTasks.findIndex(task=>{return task.description === taskUncheck.lastElementChild.innerText})].checked = false
    
    onGoingTaskGrid.firstChild.appendChild(taskUncheck)
    showTasksInScreen()
}
function completedTasksHandler(taskChecked) {
    onGoingTasks[onGoingTasks.findIndex(task=>{return task.description === taskChecked.lastElementChild.innerText})].checked = true
    
    let completedTaskGrid = document.getElementById('completedTaskGrid')
    completedTaskGrid.appendChild(taskChecked)
    showTasksInScreen()
}