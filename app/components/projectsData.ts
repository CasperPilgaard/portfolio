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
        description: "This is the site you're looking at right now. Built to showcase my projects, skills and experience as a software developer.",
        stack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Vercel"],
        github: "https://github.com/casperpilgaard/portfolio",
        image: "/ProjectImages/Portfolio.png"
    },

    {
        title: "WasteIT",
        description: `School project - In collaboration with IBM, we made a prototype for a waste management system. The idea was to give an overview for waste collectors, so they do not 
        drive in vain and waste time.`,
        stack: ["JavaScript", "React", "Firebase", "C#"],
        github: "https://github.com/WasteIT/WasteManagement_IBM",
        image: "/ProjectImages/WasteIT.png"
    },
]