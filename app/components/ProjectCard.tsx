import Button from "./Button";
import { Project } from "./projects";


interface projectProps {
    project: Project
}


export default function Projects( {project}:projectProps )  {
    return (
        <>

            <div className="w-full p-3 border-1 rounded-xl border-c-muted mb-10 bg-black/20">
                <h3 className="text-c-accent text-xl">{project.title}</h3>
                <p className="text-c-body text-sm mb-1">{project.description}</p>

                <div className="flex gap-2 mb-2">
                    {project.stack.map( (tech, i) => (
                        <span key={i} className="bg-white/5 px-2 py-1 rounded-md text-c-body text-xs whitespace-nowrap">{tech}</span>
                    ))}
                </div>

                <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button className="border border-c-accent text-c-accent px-3 py-1 rounded-md text-sm hover:bg-c-accent hover:text-black transition-colors">
                        Source code
                    </Button>
                </a>

            </div>
        </>
    )

}