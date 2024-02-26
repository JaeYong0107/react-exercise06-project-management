import { useState } from "react";

import CreateProject from "./components/CreateProject";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";
import NoSelectedProject from "./components/NoSelectedProject";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectProjectId: undefined,
    projects: []
  });

  function handleCreate() {
    setProjectsState((prevState => ({ ...prevState, selectProjectId: null })))
  }

  function handleDelete() {
    setProjectsState((prevState => ({ ...prevState, selectProjectId: undefined })))
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
        selectProjectId: newProjectId,
        projects: [...prevState.projects, newProject]
      }
    }))
  }

  let idIdentifier;
  function handleProject(id) {
    idIdentifier = id;
  }

  return (
    <div className="flex flex-row pt-12">
      <ProjectSideBar onCreate={handleCreate} onProject={handleProject} projects={projectsState.projects} />
      {projectsState.selectProjectId === null ? <CreateProject onDelete={handleDelete} onAdd={handleAdd} /> :
        <NoSelectedProject onCreate={handleCreate} />}
      <SelectedProject projects={projectsState.projects} />
    </div>
  );
}

export default App;
