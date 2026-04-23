import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function Footer() {


    return (
        <footer className="border-t border-c-muted py-4 md:py-8 flex flex-col items-center gap-3 md:gap-6 relative z-10 mt-10">
            <div className="flex gap-6">
                <a href="https://github.com/casperpilgaard" target="_blank" rel="noopener noreferrer" className="text-c-muted hover:text-c-accent transition-colors duration-200">
                    <FaGithub className="w-7 h-7 md:w-10 md:h-10" />
                </a>
                <a href="https://linkedin.com/in/capilgaard" target="_blank" rel="noopener noreferrer" className="text-c-muted hover:text-c-accent transition-colors duration-200">
                    <FaLinkedin className="w-7 h-7 md:w-10 md:h-10" />
                </a>
                <a href="mailto:casper.pilgaard@hotmail.com" className="text-c-muted hover:text-c-accent transition-colors duration-200">
                    <MdEmail className="w-7 h-7 md:w-10 md:h-10" />
                </a>
            </div>
            <p className="text-c-accent text-sm md:text-base tracking-widest">Casper Pilgaard ©2026</p>
        </footer>
    )
}