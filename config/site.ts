export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: "Nguyen Van Tuan",
    shortName: "VanTuan",
    navLinks: [
        {
            title: "about",
            href: "/",
        },
        {
            title: "work",
            href: "/work",
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ],
    socialLinks: {
        facebook: "https://www.facebook.com/TuanNguyen.244",
        github: "https://github.com/shadcn/ui",
        docs: "https://ui.shadcn.com",
    },
}
