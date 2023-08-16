"use client"

import { ChangeEvent, ChangeEventHandler } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import BackgroundAnimation from "@/components/common/BackgoundAnimation"
import { Icons } from "@/components/common/icons"

export default function ContactPage() {
    const introStyles = "m-[auto] relative py-[100px] text-center z-3"
    const titleStyles =
        " xs:text-3xl sm:text-4xl md:text-6xl xs:leading-[40px] sm:leading-[50px] md:leading-[66px]  font-avant font-bold"

    const socialStyles =
        "sticky bottom-[0] xs:p-[10px] sm:p-[20px] grid xs:grid-cols-2 sm:grid-cols-[150px_200px_auto] md:grid-cols-3 gap-[20px] z-3"
    const socialColStyles = "flex flex-col gap-[15px_0] text-main"

    const onSendStory = (e: ChangeEvent<HTMLInputElement>) => {}

    return (
        <section className=" xs:max-w-full sm:max-w-full md:max-w-[1170px] mx-auto px-[20px] pt-[65px] pb-[20px] h-[calc(100vh_-_85px)] flex flex-col min-h-screen">
            <div className={introStyles}>
                <p className={titleStyles}>Do you have a story? Got an idea?</p>
                <p className={titleStyles}>
                    {" "}
                    Contact me, let's create it together...
                </p>
            </div>
            <div className={socialStyles}>
                <div className={socialColStyles}>
                    <Link
                        className="flex items-center gap-[0_5px] "
                        href={"https://www.facebook.com/TuanNguyen.244"}
                        target="_blank"
                    >
                        <Icons.caret className="h-7 w-7  " /> Facebook
                    </Link>
                    <Link
                        className="flex items-center gap-[0_5px]"
                        href={"https://github.com/tuanngv244/"}
                        target="_blank"
                    >
                        <Icons.caret className="h-7 w-7" />
                        Github
                    </Link>
                </div>
                <div className={socialColStyles}>
                    <Link className="flex items-center gap-[0_5px]" href={"#"}>
                        <Icons.caret className="h-7 w-7" /> Instagram
                    </Link>
                    <Link
                        className="flex items-center gap-[0_5px]"
                        href={
                            "https://www.linkedin.com/in/nguyen-tuan-748bb7202/"
                        }
                        target="_blank"
                    >
                        <Icons.caret className="h-7 w-7" />
                        LinkedIn
                    </Link>
                </div>
                <div
                    className={
                        socialColStyles +
                        " xs:text-center sm:text-left xs:col-span-2 sm:col-span-1"
                    }
                >
                    <div className="flex flex-col">
                        <span className="text-[12px]  text-main font-bold">
                            Email
                        </span>
                        <a
                            className="text-[14px] font-avant text-main font-medium"
                            href="mailto:tuanngv24.4@gmail.com"
                        >
                            tuanngv24.4@gmail.com
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[12px]  text-main font-bold">
                            Phone
                        </span>
                        <a
                            className="text-[14px] font-avant text-main font-medium"
                            href="tel:0376600676"
                        >
                            (+84) 37 6600 676
                        </a>
                    </div>
                </div>
            </div>
            <BackgroundAnimation />
        </section>
    )
}
