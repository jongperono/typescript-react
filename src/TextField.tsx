import React, { useState, useRef } from 'react'

interface Props {
    text: string
    ok?: boolean
    i?: number
    fn?: () => string
}

export const TextField: React.FC<Props> = ({ text }) => {
    const [count, setCount] = useState<{ text: string }>()
    const inputRef = useRef<HTMLDivElement>(null)
    return (
        <>asdasdasd
            <div ref={inputRef}>

            </div>
            {count}

        </>
    )
}
