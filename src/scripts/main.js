const taskName = document.querySelector('.taskName')
const submitNewTask = document.querySelector('.submitNewTask')

submitNewTask.addEventListener('click',(e)=>{
    e.preventDefault()
    createTask(taskName.value)
    taskName.value = ''
})