"use client"

import { useEffect, useState } from 'react';
import { VideoText } from "@/components/ui/video-text"

const page = () => {
    const [inputText, setInputText] = useState('')

    const handleInput = (e) => {
        setInputText(e.target.value)
    }

    return (
        <div>
            <input onChange={handleInput} value={inputText} className='border-2 border-green-500 rounded lg:ml-11' placeholder='Type something..' />
            <div className="relative h-[400px] w-full overflow-hidden">
                <VideoText src="cube.mp4">
                    {inputText}
                </VideoText>

            </div>

        </div>
    )
}

export default page


