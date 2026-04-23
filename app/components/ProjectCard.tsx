interface ProjectCardProps {
    title: string
    description: string
    stack: string[]
    github: string
    image?: string
}

export default function ProjectCard({ title, description, stack, github, image }: ProjectCardProps) {
    return (
        <div className="h-full px-2 py-3 flex flex-col md:flex-row gap-6 items-start border-b border-c-muted last:border-none">
            <div className="flex flex-col gap-3 flex-1">
                <h3 className="text-c-hero text-lg md:text-xl"> {title} </h3>
                <p className="text-c-body text-sm md:text-base"> {description} </p>
                    
                <div className="flex flex-wrap gap-2">
                    {stack.map( (item, i) => (
                        <span key={i} className="border rounded px-2 py-0.5 text-xs md:text-base border-c-muted bg-white/5 text-c-accent"> 
                        {item}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3 items-start">
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-c-accent text-sm py-1 px-3 border border-c-muted rounded-full hover:bg-white/5 transition-colors">
                    GitHub →
                </a>
                {image && (
                <img src={image} alt={title} draggable="false" className="w-full max-w-80 lg:max-w-120 aspect-[16/9] object-cover  rounded-lg border border-c-muted brightness-75" />
                )}
            </div>
        </div>
    )
}