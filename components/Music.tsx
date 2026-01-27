"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
const Music = () => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)

    const togglePlay = () => {
        if (!audioRef.current) return

        if (audioRef.current.paused) {
            audioRef.current.play()
            setIsPlaying(true)
        } else {
            audioRef.current.pause()
            setIsPlaying(false)
        }
    }

    const updateProgress = () => {
        if (!audioRef.current) return
        const { currentTime, duration } = audioRef.current
        console.log("currentTime", currentTime)
        console.log("duration", duration)
        setProgress((currentTime / duration) * 100 || 0)
    }

    return (
        <div className="pt-4 text-[#2b1105] max-w-[300px] w-full mx-auto">
            <p className="text-center font-mono">Vanila</p>
            <div className="h-1 w-full rounded border border-[#2b1105] mt-3">
                <div
                    className="h-full rounded bg-[#2b1105] transition-all"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <button
                onClick={togglePlay}
                className="px-5 py-3 text-center block w-max mx-auto h-[55px]"
            >
                {isPlaying ?
                    <FontAwesomeIcon icon={faPause} />
                    :
                    <FontAwesomeIcon icon={faPlay} />
                }
            </button>
            <audio
                ref={audioRef}
                src="/audio/vanila.mp3"
                onTimeUpdate={updateProgress}
                onEnded={() => setIsPlaying(false)}
            />
        </div>
    )
}

export default Music