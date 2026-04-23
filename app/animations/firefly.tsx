"use client"
import { useEffect, useRef } from "react"

export default function Fireflies() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const count = 35

    //Range between -60px and +60px
    const rand = () => (Math.random() - 0.5) * 120 + "px"

    for (let i = 0; i < count; i++) {
      const el = document.createElement("div")
      

      //Range between 3 and 7.
      const size = 3 + Math.random() * 7

      el.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, #5ecb8a 0%, #3a8f5e 40%, transparent 70%);
        width: ${size}px; height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        --x1:${rand()};--y1:${rand()};
        --x2:${rand()};--y2:${rand()};
        --x3:${rand()};--y3:${rand()};
        --x4:${rand()};--y4:${rand()};
        animation: float ${20 + Math.random() * 30}s ${-(Math.random() * 20)}s linear infinite,
        pulse ${3 + Math.random() * 6}s ${-(Math.random() * 4)}s ease-in-out infinite;
      `
      container.appendChild(el)
    }

    return () => { container.innerHTML = "" }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
}