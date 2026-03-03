const data = []

type Project = {
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
                    <div key={i} className="w-full p-3 border-1 rounded-xl border-c-muted mb-10">
                        <p className="text-c-accent">{project.title}</p>
                        <p className="text-c-body text-sm">{project.description}</p>

                

                        <div className="flex gap-2">
                            {project.stack.map( (tech, i) => (
                                <span key={i} className="p-1 rounded-xl border-1 border-c-muted w-3/10 text-c-body text-center text-xs whitespace-wrap overflow-auto">{tech}</span>
                            ))}

                            


                        </div>

                    </div>

                        ))}
            </div>

                        

                
        </>
    )
}