// import { Task} from '../subComponents/Task'

export function Main(){
    return (
        <main>

        <section className="onGoingTasks">
            <nav id="onGoingTaskGrid">
                
            </nav>
        </section>

        <section className="completedTasksSection">
            <nav>
                <h1>Completed</h1>
                <ul id="completedTaskGrid" className="completedTaskGrid">
                </ul>
            </nav>
        </section>

    </main>
    )
}