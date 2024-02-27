import { useState } from "react";

import CreateProject from "./components/CreateProject";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";
import NoSelectedProject from "./components/NoSelectedProject";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleCreate() {
    setProjectsState((prevState => ({ ...prevState, selectedProjectId: null })))
  }

  function handleHome() {
    setProjectsState((prevState => ({ ...prevState, selectedProjectId: undefined })))
  }

  function handleAdd(projectData) {
    setProjectsState((prevState => {
      const newProjectId = Math.random();
      const newProject = {
        ...projectData,
        id: newProjectId
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    }))
  }

  function handleAddTask(task) {
    setProjectsState((prevState => {
      const taskId = Math.random();
      const newTask = {
        text: task,
        projectId: prevState.selectedProjectId,
        id: taskId,
      }

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    }))
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      }
    })
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    })
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content = <SelectedProject
    projects={selectedProject}
    tasks={projectsState.tasks}
    onDeleteProject={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask} />

  if (projectsState.selectedProjectId === null) {
    content = <CreateProject onHome={handleHome} onAdd={handleAdd} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoSelectedProject onCreate={handleCreate} />
  }

  return (
    <div className="flex flex-row pt-12">
      <ProjectSideBar
        onCreate={handleCreate}
        onHome={handleHome}
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </div>
  );
}

export default App;
