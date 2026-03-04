export type Project = {
    title: string;
    description: string;
    stack: string[];
    github: string;
    image?: string;
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
        description: "School project - refactored and extended an existing Twitter clone in C# and .NET",
        stack: ["C#", ".NET", "Razor Pages", "xUnit"],
        github: "https://github.com/ITU-BDSA23-GROUP2/Chirp"
    }
]