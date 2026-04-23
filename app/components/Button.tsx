import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ 
    children, 
    className,
    ...props
}: ButtonProps) {
    const defaultStyling = "hover:cursor-pointer transition-colors duration-200"

return (
    <button className={`${defaultStyling} ${className}`} {...props}>
        {children}
    </button>
)
} 