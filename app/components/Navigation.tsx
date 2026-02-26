"use client";

import { useState } from "react";
import Button from "./Button";

function scrollToSection(
    id: string,
    offset: number = 80,

) {
    const el = document.getElementById(id);
    if (!el) return;

    const yScroll = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({top: yScroll, behavior: "smooth"})
}


export default function Navigation() {

    

    return (
        <header className="sticky top-0 z-50 h-16">
            <nav className="backdrop-blur-sm bg-black/10 flex justify-between items-center px-6 py-4">
                <div className="flex gap-6">
                    <Button
                        onClick={() => scrollToSection('about')}
                        className=""
                        >About
                    </Button>

                </div>
            </nav>
        </header>
    )
}