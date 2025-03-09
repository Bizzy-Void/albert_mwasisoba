import React from "react"
import WhoAmI from "./whoamI"

function AboutPage() {
    return (
        <>
            <div className="relative bg-bg_color w-full h-full flex items-center justify-center">
                <div className="px-4 md:px-10 lg:px-32 absolute top-0 left-0 w-full h-full flex items-center justify-center md:justify-between">
                    <WhoAmI />
                </div>
            </div>
        </>
    )
}

export default AboutPage
