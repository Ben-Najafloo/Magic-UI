import { MorphingText } from "./ui/morphing-text"
import { CardSpotlight } from "@/components/ui/card-spotlight";

const texts = [
    "JavaScript", "TypeScript", "React.js", "Next.js", "Redux TK", "MongoDB", "Node.js", "Python (Flask)", "MySQL", "PostgreSQL", "AI / ML / NLP Integration", "Jira (Agile Methodology)", "Git / GitHub / GitLab"
]

export function MorphinSkills() {
    return (
        <CardSpotlight>
            <MorphingText texts={texts} className="w-full my-48" />
        </CardSpotlight>
    )
}
