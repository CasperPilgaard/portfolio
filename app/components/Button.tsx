import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ 
    children, 
    className,
    ...props
}: ButtonProps) {
    const defaultStyling = "text-c-subtle text-lg hover:cursor-pointer transition-colors duration-200 hover:text-c-accent "
    return(
        <button className={`${defaultStyling} ${className}`} {...props}>
            {children}
        </button>
    )
} 