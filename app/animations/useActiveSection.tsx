import { useEffect, useState } from "react"

export function useActiveSection(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState<string>("")

    useEffect(() => {
        const observers = sectionIds.map(id => {
            const el = document.getElementById(id)
            if (!el) return null

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id)
                    } else {
                        setActiveSection(prev => prev === id ? "" : prev)
                    }
                },
                { threshold: 0.1, rootMargin: "0px 0px -50% 0px" }
            )

            observer.observe(el)
            return observer
        })

        return () => observers.forEach(o => o?.disconnect())
    }, [])

    return activeSection
}