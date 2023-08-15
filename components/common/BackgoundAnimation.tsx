"use client"

import React, { FC, useState } from "react"
import { motion } from "framer-motion"

type Props = {}

const BackgroundAnimation: FC<Props> = ({}) => {
    const mainStyles = "fixed top-0 left-0 w-full h-full overflow-hidden z-1"
    const randomIndex = Array.from({ length: 30 }).map(
        (_, index) => (Math.random() * index + 1) * 50
    )
    console.log(randomIndex)
    return (
        <div className={mainStyles}>
            {randomIndex.map((item, index) => (
                <motion.div
                    style={{
                        background: "#DC2626",
                        opacity: 0.5 * Math.random(),
                        width: "100px",
                        height: "100px",
                        borderRadius: "4px",
                        position: "absolute",
                        bottom: 0,
                        left: item,
                    }}
                    initial={{ y: 100, rotate: 0 }}
                    animate={{
                        y: -500,
                        rotate: 90,
                    }}
                    transition={{
                        type: "tween",
                        ease: "easeIn",
                        duration: 2,
                        delay: index * Math.random(),
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                ></motion.div>
            ))}
        </div>
    )
}

export default React.memo(BackgroundAnimation)
