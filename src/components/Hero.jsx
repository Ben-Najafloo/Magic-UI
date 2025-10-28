import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { PixImage } from "./PixImage"
import { Pointer } from "@/components/ui/pointer"
import Introduction from "./Introduction"
import { OrbitingSkills } from "./OrbitingSkills"

// import { LensPic } from "./LensPic"


export function Hero() {
    return (
        <div className="bg-background relative size-[600px] w-full overflow-hidden rounded-lg border">

            <FlickeringGrid
                className="absolute inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
                squareSize={4}
                gridGap={6}
                color="#60A5FA"
                maxOpacity={0.5}
                flickerChance={0.1}
                height={800}
                width={1200}
            />


            <div className="absolute inset-0 z-49 flex p-4">
                <div className="flex justify-between w-full lg:px-7">

                    <div className="p-4 pt-32">
                        <div className="relative flex">
                            <Introduction />
                        </div>
                        <Pointer>
                            <div className="text-2xl">Ben</div>
                        </Pointer>
                    </div>

                    <div className="pt-32">
                        {/* <PixImage /> */}
                        <OrbitingSkills />
                    </div>
                </div>
            </div>
        </div>
    )
}



