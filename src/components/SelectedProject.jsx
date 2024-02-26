import { useRef } from "react"

export default function SelectedProject({ projects }) {
    const task = useRef();

    const formattedDate = new Date(projects.dueDate).toLocaleDateString('en-Us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (<>
        <div className="flex flex-col w-1/2 pl-11 pt-20 gap-7">
            <header className="flex flex-row justify-between gap-11">
                <h1 className="font-bold text-4xl">Learning React</h1>
                <button>Delete</button>
                <p>{formattedDate}</p>
                <p>{project.description}</p>
            </header >
            <div>
                <h1 className="font-bold text-3xl">Tasks</h1>
                <div className="flex flex-row gap-6">
                    <input ref={task} type="text" className="w-1/3 h-10 bg-stone-200 rounded-sm" />
                    <button>Add Task</button>
                </div>
                <ul className="bg-stone-200 rounded-md pt-7">
                    <li className="flex felx-row justify-between m-3">
                        <p>ddddddddddddddddddddddddd</p>
                        <button>Clear</button>
                    </li>
                </ul>
            </div>
        </div>
    </>)
}