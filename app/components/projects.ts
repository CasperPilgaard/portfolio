export type Project = {
    title: string;
    description: string;
    stack: string[];
    github: string;
}

export const projects: Project[] = [
    {
        title: "Portfolio",
        description: "My personal portfolio",
        stack: ["TypeScript", "Next.js", "Tailwind CSS"],
        github: "https://github.com/casperpilgaard/portfolio"
    },
    {
        title: "Chirp",
        description: "School project - Twitter like clone, where we focused on adding new features and refactoring old codebase",
        stack: ["C#", ".NET", "Razor Pages", "xUnit"],
        github: "https://github.com/casperpilgaard/portfolio"
    }
]