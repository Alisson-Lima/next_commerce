import React, { ReactNode } from 'react'

type ContainerProps = {
    children: ReactNode,
    className?: string
}

export default function Container({ children, className }: ContainerProps) {
    return (
        <div className={`${className} w-full max-w-[1280px] m-auto relative px-4`}>
            {children}
        </div>
    )
}