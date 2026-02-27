import Button from "./Button";

export default function Intro() {
    return (
        <div className="flex flex-col text-left gap-1">
            <p className="text-c-subtle text-xl font-semibold">Hi there! I'm</p>
            <h1 className="text-c-hero text-4xl font-bold md:text-6xl">Casper Pilgaard</h1>    
            <p className="text-c-subtle text-lg font-semibold md:text-2xl ">
                I'm a Software Developer
            </p>

            <p className="text-c-body font-normal mt-4 text-base max-w-sm"></p>

            <Button className="border-black">Github</Button>
        </div>
    )
}