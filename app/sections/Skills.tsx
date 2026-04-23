"use client"

import SkillCard from "../components/SkillCard"
import { useScrollReveal } from "@/app/animations/useScrollReveal"
import { FaGithub } from "react-icons/fa"

const skills = [
    { name: "TypeScript", icon: "/icons/TypeScript.svg" },
    { name: "JavaScript", icon: "/icons/JavaScript.svg" },
    { name: "HTML", icon: "/icons/HTML.svg" },
    { name: "CSS", icon: "/icons/CSS.svg" },
    { name: "React", icon: "/icons/React.svg" },
    { name: "Next.js", icon: "/icons/NextJS.svg" },
    { name: "Tailwind", icon: "/icons/Tailwind.svg" },
    { name: "C#", icon: "/icons/CSharp.svg" },
    { name: "Git", icon: "/icons/Git.svg" },
    { name: "GitHub", icon: "/icons/GitHub.svg" },
    { name: "Vercel", icon: "/icons/Vercel.svg" },
    { name: "NPM", icon: "/icons/NPM.svg" },
    { name: "VS Code", icon: "/icons/VSCode.svg" },
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