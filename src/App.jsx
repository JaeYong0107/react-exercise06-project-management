import { useRef } from "react";

import CreateProject from "./components/CreateProject";
import NewProject from "./components/NewProject";
import ProjectSideBar from "./components/ProjectSideBar";

function App() {
  const click = useRef();


  return (
    <div className="flex flex-row pt-12">
      <ProjectSideBar />
      <NewProject />
      {/* <CreateProject /> */}
    </div>
  );
}

export default App;
