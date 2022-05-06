function sortArray(arr) {
    arr.sort((a, b) => {
        if (a.description < b.description) return -1;
        if (a.description > b.description) return 1;
        return 0
    })
}

function addListenerToInputs() {
    const checkbox = document.querySelectorAll('input[type=checkbox]')
    checkbox.forEach(check => {
        check.addEventListener('click', e => {
            if (check.checked === true) {
                completedTasksHandler(check.parentElement)
            } else {
                onGoingTasksHandler(check.parentElement)
            }
        })
    })
}