import ProjectCard from "../components/ProjectCard";
import { projects } from "../components/projectsData"

export default function Projects() {
    return (
        <div className="">
            <h2 className="text-c-heading text-3xl md:text-5xl text-center mb-5 md:mb-20">Projects</h2>
            <div className="flex flex-col border border-c-muted rounded-xl px-3 py-4 bg-black/20">
                {projects.map((project, i) => (
                    <ProjectCard key={i} {...project} />
                ))}
                
            </div>
        </div>
    )
}