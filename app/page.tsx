"use client"

import { Device, useDevice } from "@/hooks/useDevice"
import BackgroundAnimation from "@/components/common/BackgoundAnimation"
import Introduction from "@/components/common/Introduction"

export default function IndexPage() {
    const { device } = useDevice();
    return (
        <section className="min-h-screen relative">
            <Introduction />
            {device == Device.Mobile && <BackgroundAnimation />}
        </section>
    )
}
