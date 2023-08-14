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
    const mainStyles = "h-screen relative overflow-hidden"
    const maskStyles =
        " w-full h-full flex items-center text-white font-avant  justify-center xs:text-3xl sm:text-4xl md:text-6xl xs:leading-[30px] sm:leading-[40px] md:leading-[66px] cursor-default"
    const titleStyles = {
        maxWidth: "1000px",
        color: "#afa18f",
        padding: "0 15px",
    }

    return (
        <div className={mainStyles}>
            {/* <span>Hello!</span> */}
            <motion.div
                className={cn(maskStyles, { "mask-cursor-intro": true })}
                animate={{
                    WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
            >
                <p
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    style={titleStyles}
                >
                    The core value - lies in the user experience, evaluation,
                    interaction, story in product and customer satisfaction.
                </p>
            </motion.div>
            <div className={maskStyles}>
                <p style={titleStyles}>
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
