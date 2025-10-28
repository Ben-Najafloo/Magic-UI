import { PixelImage } from "@/components/ui/pixel-image"

export function PixImage() {
    return (
        <PixelImage
            src="p1/ben2.png"
            customGrid={{ rows: 4, cols: 6 }}
            grayscaleAnimation
        />
    )
}
