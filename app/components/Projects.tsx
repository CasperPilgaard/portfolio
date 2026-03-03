import ProjectCard from "./ProjectCard";
import {projects} from "./projects"


export default function Projects() {
    return(
        <>
            <h2 className="text-c-heading text-2xl">Projects</h2>
            <p className="text-c-body mb-4">These are the projects I've made myself or been apart of:</p>
            
            <div className="">
                {projects.map((project, i) => (
                    <div key={i} className="w-full">
                        <ProjectCard project={project}/>
                    </div>

                ))}
            </div>  
        </>
    )
}