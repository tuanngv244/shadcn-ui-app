import { useEffect, useState } from "react"

export const useMousePosition = () => {
    const [position, setPosition] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    })

    const updateMousePosition = (e: MouseEvent) =>
        setPosition({ x: e.pageX, y: e.pageY })

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition)

        return () =>
            window.removeEventListener("mousemove", updateMousePosition)
    }, [])

    return position
}
