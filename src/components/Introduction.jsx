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
                    Computer Science Master’s graduate with experience in software development.
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    Proficient in JavaScript, PHP, and Python, with strong expertise in Node.js
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    for building scalable RESTful APIs.
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    Skilled in Next.js and TypeScript, with experience in MySQL and MongoDB.
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    Proven capability in full-stack engineering,
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    managing development across the entire tech stack and
                </AnimatedSpan>
                <AnimatedSpan className="text-blue-500">
                    establishing automated CI/CD pipelines for scalable deployments on platforms.
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    Strong interest in machine learning, data preprocessing, and
                </AnimatedSpan>
                <TypingAnimation className="text-muted-foreground">
                    ethical AI practices, backed by a thesis project on fairness in AI.
                </TypingAnimation>

            </Terminal>

        </div>
    )
}

export default Introduction
