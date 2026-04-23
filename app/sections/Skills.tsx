"use client"

import SkillCard from "../components/SkillCard"
import { useScrollReveal } from "@/app/animations/useScrollReveal"

const skills = [
    { name: "TypeScript", icon: "/Icons/TypeScript.svg" },
    { name: "JavaScript", icon: "/Icons/JavaScript.svg" },
    { name: "HTML", icon: "/Icons/HTML.svg" },
    { name: "CSS", icon: "/Icons/CSS.svg" },
    { name: "React", icon: "/Icons/React.svg" },
    { name: "Next.js", icon: "/Icons/NextJS.svg" },
    { name: "Tailwind", icon: "/Icons/Tailwind.svg" },
    { name: "C#", icon: "/Icons/CSharp.svg" },
    { name: "Git", icon: "/Icons/Git.svg" },
    { name: "GitHub", icon: "/Icons/GitHub.svg" },
    { name: "Vercel", icon: "/Icons/Vercel.svg" },
    { name: "NPM", icon: "/Icons/NPM.svg" },
    { name: "VS Code", icon: "/Icons/VSCode.svg" },
]

export default function Skills() {
    const { ref, isVisible } = useScrollReveal()
    return (
        <div ref={ref} className="h-full p-6">
            <h3 className="text-c-heading text-3xl font-bold md:text-5xl mb-5 md:mb-15 text-center">Skills</h3>
            <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((skill, i) => (
                    <SkillCard key={skill.name} name={skill.name} icon={skill.icon} delay={i * 100} isVisible={isVisible} />
                ))}
            </div>
        </div>
    )
}