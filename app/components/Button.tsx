import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ 
    children, 
    className,
    ...props
}: ButtonProps) {
    const defaultStyling = "text-c-subtle text-lg hover:cursor-pointer "
    return(
        <button className={`${defaultStyling} ${className}`} {...props}>
            {children}
        </button>
    )
} 