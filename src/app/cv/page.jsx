import {
    Card,
    CardHeader,
} from "@/components/ui/card"
import { Lens } from "@/components/ui/lens"


const page = () => {
    return (
        <div className="lg:flex pt-10">
            <Lens>
                <img
                    src="cv1.jpg"
                    alt="image placeholder"
                    width={800}
                    height={800}
                />
            </Lens>
            <Lens>
                <img
                    src="cv2.jpg"
                    alt="image placeholder"
                    width={800}
                    height={800}
                />
            </Lens>
        </div>
    )
}
export default page