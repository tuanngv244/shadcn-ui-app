import Link from "next/link"
import { use } from "react"
import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"

export default function WorkPage() {
      const data = use(getResources())

    const boxPrjStyles =
        "mx-auto my-auto p-[10px] w-[600px] h-[600px] border  border-white overflow-hidden flex items-center justify-center relative after:absolute after:content-[''] after:transition after:w-full after:h-full z-[-1] after:bg-white after:top-0 after:left-0 after:mix-blend-difference hover:after:scale-x-100 hover:after:rotate-0 "
    return (
        <section className="px-[20px] pt-[85px] pb-[20px] h-[calc(100vh)] flex items-center justify-center">
            <div className={boxPrjStyles}>
                <h3 className="text-4xl font-semibold mix-blend-difference">
                    Bambuup Platform
                </h3>
            </div>
        </section>
    )
}


// getStaticProps in Next13
const getResources = async () => {
    const response = await fetch(
        "https://js-post-api.herokuapp.com/api/posts?_page=1"
    )
    return await response?.json()
}
