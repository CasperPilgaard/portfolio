export default function About() {
    const sections = [
        "Hi, I'm Casper! I'm a recent graduate from the IT University of Copenhagen. Currently based in Copenhagen, open to new opportunities.",
        "One of my proudest moments was winning the ITU Quality Award for the WasteIT project, an IoT dashboard my team built during my studies.",
        "As a developer, my goal is to contribute somewhere that actually matters. To build things that solve real problems for people. I also highly value learning new things and technologies",
        "When I'm not busy coding, I love to travel, play football, play the piano, or hanging out with my friends.",

    ]
            
    return(
        <div className="h-full p-6">
            <h3 className="text-c-heading text-3xl md:text-5xl mb-8 md:mb-30 text-center">
                About Me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="flex flex-col gap-3 md:gap-6">
                    {sections.map((item, i) => (
                        <div key={i} className="flex text-base md:text-xl">
                        <p className="text-c-accent mr-4 select-none"> ✦ </p>
                        <p  className="text-c-subtle"> {item}</p>
                        </div>
                    ))}
                </div>
                <img ></img>
            </div>
        </div>
    )
}