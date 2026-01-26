"use client"

import { useRef, useState } from 'react'

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
        setProgress((currentTime / duration) * 100 || 0)
    }

    return (
        <div className="pt-4 text-[#2b1105] max-w-[400px] w-full mx-auto">
            <p className="text-center font-mono">Golden Brown X Love Story</p>
            <div className="h-1 w-full rounded border border-black mt-3">
                <div
                    className="h-full rounded bg-[#2b1105] transition-all"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <button
                onClick={togglePlay}
                className="px-5 py-3 text-center block w-max mx-auto"
            >
                {isPlaying ? '⏸' : '▶'}
            </button>
            <audio
                ref={audioRef}
                src="/audio/Golden brown x Love story.mp3"
                onTimeUpdate={updateProgress}
                onEnded={() => setIsPlaying(false)}
            />
        </div>
    )
}

export default Music