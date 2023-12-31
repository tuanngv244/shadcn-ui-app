import "@/styles/globals.css"
import "@/styles/common.css"
import { Metadata } from "next"
import NextTopLoader from "nextjs-toploader"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Header from "@/components/common/Header"
import TailwindIndicator from "@/components/configs/TailwindIndicator"
import { ThemeProvider } from "@/components/configs/ThemeProvider"

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <head />
                <body
                    className={cn(
                        "min-h-screen bg-background font-sans antialiased",
                        fontSans.variable
                    )}
                >
                    <NextTopLoader
                        color="#afa18f"
                        height={1}
                        speed={600}
                        initialPosition={1}
                        showSpinner={false}
                    />
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        <div className="relative flex flex-col">
                            <Header />
                            <div className="">{children}</div>
                        </div>
                        <TailwindIndicator />
                    </ThemeProvider>
                </body>
            </html>
        </>
    )
}
