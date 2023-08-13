"use client"

import React, { FC, useState } from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { useMousePosition } from "@/hooks/useMousePosition"

type Props = {}

const Introduction: FC<Props> = ({}) => {
    const { x, y } = useMousePosition()
    const [isHover, setIsHover] = useState<boolean>(false)
    const size = isHover ? 400 : 40
    const mainStyles = "h-screen relative"
    const maskStyles =
        " container w-full h-full flex items-center text-white justify-center text-6xl leading-[66px] cursor-default"

    return (
        <div className={mainStyles}>
            {/* <span>Hello!</span> */}
            <motion.div
                className={cn(maskStyles, { "mask-cursor-intro": true })}
                animate={{
                    WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: "tween", ease: "backOut" }}
            >
                <p
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    style={{
                        maxWidth: "1000px",
                        color: "#afa18f",
                    }}
                >
                    The core value - lies in the user experience, evaluation,
                    interaction and story bring in product and story bring
                </p>
            </motion.div>
            <div className={maskStyles}>
                <p
                    style={{
                        maxWidth: "1000px",
                        color: "#afa18f",
                    }}
                >
                    I'm{" "}
                    <strong className="text-red-600">
                        {" "}
                        Frontend Developer
                    </strong>{" "}
                    - with 2 years ago experience, I focus make a product
                    quality and customer satisfaction.
                </p>
            </div>
        </div>
    )
}

export default React.memo(Introduction)
