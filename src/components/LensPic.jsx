import {
    Card,
    CardHeader,
} from "@/components/ui/card"
import { Lens } from "./ui/lens"
import { NumberTicker } from "@/components/ui/number-ticker"
export function LensPic() {
    return (
        <Card className="relative">
            <CardHeader className="w-96">
                <Lens>
                    <img
                        src="p1/6.png"
                        alt="image placeholder"
                        width={800}
                        height={800}
                    />
                </Lens>
            </CardHeader>
            <span>Hover the mouse on the picture, use lens </span>
            <div className="flex px-7 text-lg">
                Price: $
                <NumberTicker
                    value={400}
                    className="tracking-tighter whitespace-pre-wrap text-black dark:text-white"
                />
            </div>
        </Card>
    )
}
