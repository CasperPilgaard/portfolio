import Button from "./Button";
import { FaGithub } from "react-icons/fa"

export default function Intro() {
    return (
        <div className="flex flex-col text-left gap-1">
            <p className="text-c-subtle text-xl font-semibold">Hi there! I'm</p>
            <h1 className="text-c-hero text-4xl font-bold md:text-6xl">Casper Pilgaard</h1>    
            <p className="text-c-subtle text-lg font-semibold md:text-2xl ">
                Software Developer
            </p>

            <p className="text-c-body font-normal mt-4 text-base max-w-sm "></p>

            <a 
                href="https://github.com/casperpilgaard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-c-muted px-2 py-1 rounded-xl hover:border-c-accent transition-colors w-50"
                >
                <span className="text-c-accent text-center">Check out my code! </span>
                <div className="flex flex-col">
                    <FaGithub className="text-6xl text-c-accent" />
                    <p className="text-c-accent text-center">GitHub</p>
                </div>
            </a>
        </div>
    )
}