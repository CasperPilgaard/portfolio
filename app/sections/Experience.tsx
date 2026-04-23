import ExperienceCard from "@/app/components/ExperienceCard"

const jobs = [
    { company: "Documendo", title: "Software Developer Intern", time: "03/2026 - 04/2026", 
        description: `During my 4 week internship at Documendo, I analysed and improved the security of their file upload system. 
        I implemented validation to ensure uploaded files were safe and legitimate, checking file types, and checking content of certain file types. `},
    { company: "Santander Consumer Bank", title: "BackOffice Assistant", time: "07/2021 - 05/2022", 
        description: `My main role as a BackOffice Assistant, was validating documents of our customers and helping external partners with issues.
        I also used time to find improvements for our day-to-day tasks - here I developed several Bookmarklets (bookmarks that contain JavaScript code), 
        which decreased the time we spent on a task by 15%.
         `}
]





export default function Experience() {
    return(
        <>
            <h3 className="text-c-heading text-center mb-5 text-3xl md:text-5xl"> Experience</h3>
            
            <div className="flex flex-col gap-3 items-center">
                {jobs.map((item, i) => (
                    <ExperienceCard key={i} company={item.company} title={item.title} time={item.time} description={item.description}/>
                ))}
            </div>
        </>
    )
}