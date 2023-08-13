import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import MainNav from "@/components/configs/MainNav"

import ThemeToggle from "./ThemeToggle"
import { Icons } from "./icons"

const Header = () => {
    return (
        <header className="bg-background sticky top-0 z-40 w-full border-b px-[20px] backdrop-filter ">
            <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <MainNav items={siteConfig.navLinks} />
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        <Link
                            href={siteConfig.socialLinks.facebook}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className={buttonVariants({
                                    size: "icon",
                                    variant: "ghost",
                                    className: "px-[10px]",
                                })}
                            >
                                <Icons.facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </div>
                        </Link>
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
