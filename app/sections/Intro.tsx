import Image from "next/image";
import { FaGithub } from "react-icons/fa"

export default function Intro() {
    return (
        <div className="flex flex-col md:flex-col md:items-left md:justify-between gap-10">
            <div className="flex flex-col text-left gap-1">
                <p className="text-c-subtle text-xl font-semibold md:text-2xl">Hi there! I'm</p>
                <h1 className="text-c-hero text-4xl font-bold md:text-6xl md:text-7xl">Casper Pilgaard</h1>
                <p className="text-c-subtle text-lg font-semibold md:text-2xl md:text-3xl">
                    Software Developer
                </p>
            </div>

                <a
                    href="https://github.com/casperpilgaard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-2 py-4 rounded-xl bg-black/20 w-50 md:w-80 hover:bg-black/30 transition-colors"
                    >
                    <FaGithub className="text-7xl md:text-8xl text-c-accent" />
                    <div className="flex flex-col">
                        <span className="text-c-accent text-2xl md:text-4xl text-font-semibold">GitHub</span>
                        <span className="text-c-accent text-lg">Check out my code!</span>
                    </div>
                </a>
            
        </div>
    )
}