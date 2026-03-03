import Button from "./Button";
import ProjectCard from "./ProjectCard";

const data = []

export type Project = {
    title: string;
    description: string;
    stack: string[];
    github: string;
}

const projects: Project[] = [
    {
        title: "Portfolio",
        description: "My personal portfolio",
        stack: ["TypeScript", "Next.js", "Tailwind CSS"],
        github: "https://github.com/casperpilgaard/portfolio"
    }
]

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