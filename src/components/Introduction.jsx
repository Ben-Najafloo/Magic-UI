import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal"

const Introduction = () => {
    return (
        <div className='p-7'>
            <Terminal>
                <TypingAnimation className='text-xl'>BEHNAM NAJAFLOO | SOFTWARE DEVELOPER</TypingAnimation>

                <AnimatedSpan className="text-green-500">
                    Computer Science Master’s graduate with experience in
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    software development. Proficient in JavaScript, PHP, and
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    Python, with strong expertise in Node.js for building
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    scalable RESTful APIs.  Skilled in Next.js and TypeScript,
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    with experience in MySQL and MongoDB. Proven capability
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    in full-stack engineering, managing development across
                </AnimatedSpan>
                <AnimatedSpan className="text-blue-500">
                    the entire tech stack and establishing automated CI/CD
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    pipelines for scalable deployments on platforms.
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    Strong interest in machine learning, data preprocessing,
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    and ethical AI practices,
                </AnimatedSpan>
                <TypingAnimation className="text-muted-foreground">
                    backed by a thesis project on fairness in AI.
                </TypingAnimation>

            </Terminal>

        </div>
    )
}

export default Introduction
