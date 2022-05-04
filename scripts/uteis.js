const onGoingTaskGrid = document.querySelector('.onGoingTaskGrid')
const completedTaskGrid = document.querySelector('.completedTaskGrid')

function criaElementoTarefa(nomeDaTarefa) {
    const taskFormatada = nomeDaTarefa.charAt(0).toUpperCase() + nomeDaTarefa.slice(1);

    const task = document.createElement('li')
    task.innerHTML = `<input type="checkbox"><p>${taskFormatada}</p>`

    onGoingTaskGrid.appendChild(task)


    const allTasks = document.querySelectorAll('input[type=checkbox]')

    allTasks.forEach((task) => {
        // console.log(task.parentElement);
        task.addEventListener('click', (e) => {
            if (task.checked === true) {
                completedTaskGrid.appendChild(task.parentElement)
            } else {
                onGoingTaskGrid.appendChild(task.parentElement)
            }
            // Chamada pra garantir que quando clicar no check os elementos organizem novamente
            organizarElementos()
        })
    })

    organizarElementos()
}

function organizarElementos(){
    console.clear();
    const array = []
    
    const arrayTasksOnGoing = document.querySelectorAll('.onGoingTaskGrid li')
    // arrayTasksOnGoing.map((eachLi)=>{
    //     eachLi.lastChild.innerText = array[0];
    // })

    for (i = 0; i < arrayTasksOnGoing.length; i++) {
        console.log('item do array');
        console.log(arrayTasksOnGoing[i].lastChild.innerHTML);
    }

    arrayTasksOnGoing.forEach((eachli)=>{
        eachli.lastChild.innerText = array[0]
    })

    const arrayTasksCompleted = document.querySelectorAll('.completedTaskGrid li')
    arrayTasksCompleted.forEach((eachLi)=>{
        console.log(eachLi.lastChild);
    })
}