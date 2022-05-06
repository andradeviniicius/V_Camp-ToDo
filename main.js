const taskName = document.querySelector('.taskName')
const submitNewTask = document.querySelector('.submitNewTask')

submitNewTask.addEventListener('click',(e)=>{
    e.preventDefault()
    createTask(taskName.value)
    taskName.value = ''
})




const addTaskButtonMobile = document.querySelector('.addButton')


addTaskButtonMobile.addEventListener('click',()=>{
    const body = document.querySelector('body')
    const a = document.createElement('div')
    
    
    if(document.querySelector('.modal')){
        body.removeChild(document.querySelector('.modal'))
        addTaskButtonMobile.classList.remove('active')
    } else {
        addTaskButtonMobile.classList.toggle('active')
    
        a.classList.add('modal')
        a.classList.toggle('active')
    
        taskName.parentElement.classList.add('active')
        a.appendChild(taskName.parentElement)
        body.insertBefore(a,body.firstChild)
        a.addEventListener('onkeypress',()=>{
            if(document.querySelector('.modal')){
                body.removeChild(document.querySelector('.modal'))
                addTaskButtonMobile.classList.remove('active')
            }
        })
    }
    
})