import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "../common/icons"

interface MainNavProps {
    items?: NavItem[]
}

const MainNav = ({ items }: MainNavProps) => {
    const pathName = usePathname()

    return (
        <div className="flex xs:gap-3 sm:gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
                <Icons.logo className="h-6 w-6" />
                <span className="xs:hidden sm:inline-block font-bold">
                    {siteConfig.name}
                </span>
                <span className="xs:inline-block sm:hidden font-bold">
                    {siteConfig.shortName}
                </span>
            </Link>
            {!!items?.length && (
                <nav className="flex xs:gap-3 sm:gap-6">
                    {items?.map(
                        (item, index) =>
                            item.href && (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center text-md font-medium font-avant ",
                                        {
                                            "text-main": pathName == item.href,
                                        }
                                    )}
                                >
                                    {item.title}
                                </Link>
                            )
                    )}
                </nav>
            )}
        </div>
    )
}

export default MainNav
