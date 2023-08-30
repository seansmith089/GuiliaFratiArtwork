import ProjectsGallary from "../../components/ProjectsGallary/ProjectsGallary";

import useViewport from "../../CustomHooks/useViewport";


import "./projectsPage.css"

function ProjectsPage() {


  const { width, breakpoint } = useViewport();

    return (
      <div className="projects-page">
        {width > breakpoint && <h1 className="page-title">- projects -</h1>}
        <ProjectsGallary />
      </div>
    );
}

export default ProjectsPage;