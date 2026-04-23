interface SkillCardProps {
    name: string
    icon: string 
    delay?: number
    isVisible: boolean
}

export default function SkillCard({ name, icon, delay = 0, isVisible }: SkillCardProps) {
    return (
        <div
            style={{ transitionDelay: `${delay}ms` }}
            className={`group flex flex-col items-center justify-between pt-3 pb-3 rounded-xl border border-c-muted w-30 h-30 md:w-40 md:h-40 hover:border-c-accent hover:bg-white/10 transition-[opacity,transform] duration-700
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
            <div className="flex-1 flex items-center justify-center">
                <img src={icon} alt={name} draggable="false" className="w-14 h-14 md:w-23 md:h-23 transition-transform duration-700 group-hover:scale-120 select-none pointer-events-none" />
            </div>
            <span className="text-white text-sm font-semibold md:text-lg tracking-widest uppercase">{name}</span>
        </div>
    )
}