export default function About() {
    const text = `
            I graduated from the IT University of Copenhagen in the Summer of 2025,
            where I gained hands-on experience building web and mobile applications.

            I enjoy working across the full stack, with a particular interest in 
            creating intuitive user interfaces. I care about writing code that is readable, maintainable and purposeful.   


            Outside of coding, you'll find me watching or playing football, playing video games with my friends, or sitting at the piano.
            I believe that same curiosity from my hobbies, makes me a better developer.
            `
    return(
        <>
            <div>
                <h3 className="text-c-heading text-2xl">
                    About me
                </h3>
                <p className="text-c-body whitespace-wrap backdrop-blur-sm">{text}</p>
            </div>
        </>
    )
}