"use client"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import VideoJS from "./VideoJS"
import React from "react";


export function VideoDialog({ videoSrc }) {
    const playerRef = React.useRef(null);
    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: videoSrc,
            type: 'video/mp4'
        }]
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };

    return (
        <Dialog>

            <DialogTrigger asChild>
                <Button variant="outline">Demo</Button>
            </DialogTrigger>
            <DialogContent className="w-120">
                {videoSrc && <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />}
            </DialogContent>

        </Dialog>
    )
}
