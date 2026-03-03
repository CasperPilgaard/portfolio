import ProjectCard from "./ProjectCard";
import {projects} from "./projects"

export default function Projects() {
    
    return(
        <>
            <h2 className="text-2xl text-c-heading">Projects</h2>
            <p className="text-c-body mb-4">These are the projects I've made myself or been apart of:</p>
            
            <div>
                {projects.map((project, i) => (
                    <div>
                        <ProjectCard project={project}/>
                    </div>

                ))}
            </div>  
        </>
    )
}