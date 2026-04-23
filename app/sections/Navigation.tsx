"use client"

import { useActiveSection } from "@/app/animations/useActiveSection";
import Button from "@/app/components/Button";
import Image from "next/image";

function scrollToSection(
    id: string,
    offset: number = -80
) {
    const el = document.getElementById(id);
    if (!el) return;

    const yScroll = el.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({top: yScroll, behavior: "smooth"})
}

const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },

]


export default function Navigation() {
    const activeSection = useActiveSection(['intro', ...navLinks.map((item) => item.id)])
    

    return (
        <header className="sticky top-0 z-50 flex justify-center p-3 md:pt-4">
            <nav className="backdrop-blur-sm bg-black/60 border border-c-muted rounded-full flex items-center gap-1 md:gap-2 px-4 md:px-6 py-2 md:py-2">
                <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <Image src="/favicon.svg" alt="CP logo" width={24} height={24} />
                </Button>

                <div className="w-px h-3 md:h-4 bg-c-muted mx-1 md:mx-2" />
                
                <div className="flex gap-3 md:gap-4">
                    {navLinks.map(({ id, label }) => (
                        <Button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className={`text-base md:text-lg ${activeSection === id ? 'text-c-accent' : 'text-c-subtle hover:text-c-accent'}`}
                        >
                            {label}
                        </Button>
                    ))}
                </div>
            </nav>
        </header>
    )
}