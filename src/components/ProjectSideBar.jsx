export default function ProjectSideBar({ onCreate, onProject, projects }) {
    return (
        <aside className="w-1/3 h-screen px-8 py-16
        bg-neutral-700 rounded-tr-xl">
            <h1 className="my-10 text-white text-2xl font-bold">MY PROJECTS</h1>
            <button className="w-32 h-10 mb-10 rounded-md text-neutral-400 bg-neutral-600 hover:bg-neutral-800"
                onClick={onCreate}>+Add Project</button>
            <ul className="mt-2">
                {projects.map((project) => (
                    <li key={project.id}>
                        <button className="w-full text-left px-2 py-1 rounded-md my-1 text-neutral-300 hover:text-neutral-200 hover:bg-neutral-800"
                            onClick={() => { onProject(project.id) }}>
                            {project.title}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    )
};