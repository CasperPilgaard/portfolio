import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ 
    children, 
    className,
    ...props
}: ButtonProps) {
    const defaultStyling = "text-lg"
    return(
        <button className={`${defaultStyling} ${className}`} {...props}>
            {children}
        </button>
    )
} 