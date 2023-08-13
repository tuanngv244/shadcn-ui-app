"use client"

import Link from "next/link"

import { Button, buttonVariants } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Introduction from "@/components/common/Introduction"

export default function IndexPage() {
    return (
        <section className="min-h-screen">
            <Introduction />
        </section>
    )
}
