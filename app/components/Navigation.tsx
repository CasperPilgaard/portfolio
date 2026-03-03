"use client"

import Button from "./Button";
import Image from "next/image";

function scrollToSection(
    id: string,
) {
    const el = document.getElementById(id);
    if (!el) return;

    const yScroll = el.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({top: yScroll, behavior: "smooth"})
}


export default function Navigation() {

    

    return (
        <header className="sticky top-0 z-50 h-16">
            <nav className="backdrop-blur-sm bg-black/10 flex justify-between items-center px-6 py-4">
                <Button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}>
                <Image src="/favicon.svg" alt="CP logo" width={32} height={32} />
                </Button>
                <div className="flex gap-6 ml-auto">
                    <Button
                        onClick={() => scrollToSection('about')}
                        className=""
                        >About
                    </Button>

                    <Button
                        onClick={() => scrollToSection('about')}
                        className=""
                        >Projects
                    </Button>

                    <Button
                        onClick={() => scrollToSection('contact')}
                        className=""
                        >Contact
                    </Button>

                </div>
            </nav>
        </header>
    )
}