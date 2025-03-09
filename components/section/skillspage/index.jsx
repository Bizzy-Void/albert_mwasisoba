import React from "react"
import data from "@/components/utils"
import SkillTools from "./skillTools"

function SkillsPage() {
    return (
        <div className="bg-bg_color flex flex-col px-4 md:px-10 lg:px-32 items-center h-full md:justify-center">
            <h1 className="font-bold w-full text-4xl text-white text-center pb-5">
                Skills & Tools
            </h1>
            <SkillTools data={data} />
        </div>
    )
}

export default SkillsPage
