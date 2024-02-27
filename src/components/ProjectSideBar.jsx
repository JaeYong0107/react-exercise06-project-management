export default function ProjectSideBar({ onCreate, onHome, onSelectProject, projects, selectedProjectId }) {
    return (
        <aside className="w-1/3 h-screen px-8 py-16
        bg-neutral-700 rounded-tr-xl">
            <h1 className="my-10 text-white text-2xl font-bold cursor-pointer" onClick={onHome}>MY PROJECTS</h1>
            <button className="w-32 h-10 mb-10 rounded-md text-neutral-400 bg-neutral-600 hover:bg-neutral-800"
                onClick={onCreate}>+Add Project</button>
            <ul className="mt-2">
                {projects.map((project) => {
                    const cssClasses = {
                        'w-full text-left px-2 py-1 rounded-md my-1': true,
                        'hover:text-neutral-200 hover:bg-neutral-800': true,
                        'bg-neutral-800 text-neutral-300': project.id === selectedProjectId,
                        'text-neutral-200': project.id !== selectedProjectId,
                    };

                    return (
                        <li key={project.id}>
                            <button
                                className={Object.keys(cssClasses).filter((key) => cssClasses[key]).join(' ')}
                                onClick={() => onSelectProject(project.id)}
                            >
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside >
    )
};