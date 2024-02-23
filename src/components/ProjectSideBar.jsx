import { useState, useRef, forwardRef } from "react";

const ProjectSideBar = forwardRef(function ProjectSideBar() {
    const click = useRef();
    const [isClick, setIsClick] = useState(false);

    function handleClick() {
        click = true;
    }


    return (
        <div className="w-1/4 h-screen p-10
        bg-slate-800 rounded-tr-xl">
            <h1 className="my-10 text-white text-2xl font-bold">MY PROJECTS</h1>
            <button className="w-32 h-10 mb-10 text-neutral-400 bg-neutral-700 rounded-md"
                onClick={handleClick}>+Add Project</button>
            <p>Laerning React</p>
            <p>Mastering React</p>
        </div>
    )
})

export default ProjectSideBar;