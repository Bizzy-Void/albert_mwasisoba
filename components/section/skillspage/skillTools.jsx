import React from "react"
import Skill from "@/components/section/skill"

function SkillTools({ data }) {
    return (
        <div className="grid grid-cols-2 z-30 py-4 md:grid-cols-2 lg:grid-cols-3  gap-5">
            {data.skills.map((skill, index) => (
                <Skill
                    icon={skill.icon}
                    link={skill.link}
                    title={skill.title}
                    key={index}
                />
            ))}
        </div>
    )
}

export default SkillTools
