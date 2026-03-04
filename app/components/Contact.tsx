import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
    
    return(
        <>
            <h2 className="text-2xl text-c-heading">Contact me</h2>
            <p className="text-c-body mb-4">Feel free to reach out to me!</p>
            <div className="flex flex-row justify-around text-c-accent">

                <a href="mailto:casper.pilgaard@hotmail.com" className="flex flex-col items-center">
                    <CiMail className="text-4xl" />
                    <span>E-mail</span>
                </a>

                <a href="https://www.linkedin.com/in/capilgaard/" className="flex flex-col items-center">
                    <FaLinkedin className="text-4xl" />
                    <span>LinkedIn</span>
                </a>

            </div>


            
        </>
    )
}