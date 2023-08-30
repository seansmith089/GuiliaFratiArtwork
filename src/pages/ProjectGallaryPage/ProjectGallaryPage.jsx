import { useParams } from "react-router-dom";

import ProjectGallaryIndividual from "../../components/ProjectGallaryIndividual/ProjGallaryIndividual";


function ProjectGallaryPage() {
    const {project} = useParams();




    return (
      <>
        <ProjectGallaryIndividual project={project}/>
      </>
    );
}

export default ProjectGallaryPage;