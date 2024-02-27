import { useState } from "react"

export default function SelectedProject({ projects, tasks, onDeleteProject, onAddTask, onDeleteTask }) {
    const [enteredTask, setEnteredTask] = useState('');

    const formattedDate = new Date(projects.dueDate).toLocaleDateString('en-Us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    function handleChange(event) {
        setEnteredTask(event.target.value)
    }

    function handleAddTask() {
        if (enteredTask.trim() === '')
            return;

        setEnteredTask('');
        onAddTask(enteredTask);
    }

    return (<>
        <div className="flex flex-col w-1/2 pl-11 pt-20 gap-7">
            <header className="flex flex-col gap-7">
                <div className="flex flex-row justify-between gap-7">
                    <h1 className="font-bold text-4xl">{projects.title}</h1>
                    <button onClick={onDeleteProject}>Delete</button>
                </div>
                <p>{formattedDate}</p>
                <p className="whitespace-pre-wrap">{projects.description}</p>
            </header>
            <div className="flex flex-col gap-7 border-t-4">
                <h1 className="font-bold text-3xl">Tasks</h1>
                <div className="flex flex-row gap-6">
                    <input className="w-2/3 h-10 bg-stone-200 rounded-sm"
                        onChange={(event) => handleChange(event)} type="text" value={enteredTask} />
                    <button onClick={handleAddTask}>Add Task</button>
                </div>
                {tasks.length === 0 && (
                    <p className="text-stone-800 my-4">
                        This project does not have any tasks yet.
                    </p>
                )}
                {tasks.length > 0 &&
                    <ul className="bg-stone-100 rounded-md">
                        {tasks.map((task) => {
                            return (
                                <li key={task.id} className="flex felx-row justify-between m-3">
                                    <p>{task.text}</p>
                                    <button className="text-stone-700 hover:text-red-500"
                                        onClick={() => onDeleteTask(task.id)}>Clear</button>
                                </li>
                            )
                        })}
                    </ul>}
            </div>
        </div >
    </>)
}