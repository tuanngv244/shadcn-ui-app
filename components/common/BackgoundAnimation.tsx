"use client"

import React, { FC, useState } from "react"
import { motion } from "framer-motion"

import { Device, useDevice } from "@/hooks/useDevice"

type Props = {}

const BackgroundAnimation: FC<Props> = ({}) => {
    const mainStyles = "fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]"
    const randomIndex = Array.from({ length: 30 }).map(
        (_, index) => (Math.random() * index + 1) * 50
    )
    const { device } = useDevice()
    return (
        <div className={mainStyles}>
            {randomIndex.map((item, index) => (
                <motion.div
                    style={{
                        background: "#DC2626",
                        opacity: 0.5 * Math.random(),
                        width: device == Device.Mobile ? "40px" : "100px",
                        height: device == Device.Mobile ? "40px" : "100px",
                        borderRadius: "4px",
                        position: "absolute",
                        bottom: 0,
                        left:
                            device === Device.Mobile
                                ? item - index * 10
                                : item + index,
                    }}
                    initial={{ y: 100, opacity: 0.4, rotate: 0 }}
                    animate={{
                        y: -800,
                        rotate: 90,
                        opacity: 0.1,
                    }}
                    transition={{
                        type: "tween",
                        ease: "easeIn",
                        duration: 2,
                        delay:
                            (randomIndex?.length - index + 2 - 0.5) *
                            Math.random(),
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                ></motion.div>
            ))}
        </div>
    )
}

export default React.memo(BackgroundAnimation)
