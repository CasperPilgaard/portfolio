interface ExperienceCardProps {
    company: string,
    title: string,
    time: string,
    description: string
}

export default function ExperienceCard({ company, title, time, description }: ExperienceCardProps) {
    return (
        <div className="flex flex-col border border-c-muted rounded-xl sm:max-w-150 bg-black/20 py-4 px-6 sm:p-8 gap-4">
            <div className="flex flex-col items-center sm:flex-row gap-3">
                <div className="flex items-center -ml-3 gap-3">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-c-accent shrink-0 shadow-[0_0_6px_2px_rgba(90,200,140,0.4)]" />
                    <h4 className="text-c-accent text-lg sm:text-xl font-semibold">{company}</h4>
                </div>
                <span className="border border-c-muted text-xs sm:text-sm text-c-accent rounded-full bg-white/5 py-1 px-3 sm:px-4 shrink-0 font-mono md:ml-auto">{time}</span>
            </div>
            <div className="h-px bg-c-muted" />
            <h5 className="text-c-heading text-base font-semibold">{title}</h5>
            <p className="text-c-body text-sm sm:text-base leading-relaxed">{description}</p>
        </div>
    )
}