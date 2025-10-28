import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal"

const page = () => {
    return (
        <div className='p-7'>
            <Terminal>
                <TypingAnimation className='text-xl'>SOHEILA MAHMOODI | Founder, Designer</TypingAnimation>
                <AnimatedSpan className="text-green-500">
                    Soheila Mahmoodi has a design approach deeply rooted in
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    creating emotionally engaging experiences.
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    She uses her background in theater stage design
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    to understand how elements like texture, color,
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    arrangement, and light impact the senses and shape
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    the experience of the audience.
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    This insight is transferred into her interior design work,
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    where she aims to go beyond practical needs.
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    Her goal is to create spaces that not only fulfill
                </AnimatedSpan>
                <AnimatedSpan className="text-blue-500">
                    functional requirements but also connect with people
                </AnimatedSpan>
                <TypingAnimation className="text-muted-foreground">
                    on an emotional and sensory level.
                </TypingAnimation>

            </Terminal>

        </div>
    )
}

export default page
