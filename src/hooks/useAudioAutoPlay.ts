import {RefObject, useEffect, useState} from "react";

export const useAudioAutoPlay = (
    audioRef: RefObject<HTMLAudioElement | null>
) => {
    const [isPlaying, setIsPlaying] = useState(false);

    // 페이지 진입 시 자동 재생 한 번 시도
    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        audio.play().catch((error) => {
            // 브라우저 자동재생 정책으로 막힌 경우는 무시
            if (error.name !== "NotAllowedError") {
                console.error("오디오 자동 재생 실패:", error);
            }
        });
    }, [audioRef]);

    // 실제 audio 상태와 isPlaying 상태 동기화
    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        const handlePlay = () => {
            setIsPlaying(true);
        };

        const handlePause = () => {
            setIsPlaying(false);
        };

        const handleEnded = () => {
            setIsPlaying(false);
        };

        audio.addEventListener("play", handlePlay);
        audio.addEventListener("pause", handlePause);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("play", handlePlay);
            audio.removeEventListener("pause", handlePause);
            audio.removeEventListener("ended", handleEnded);
        };
    }, [audioRef]);

    // 사용자가 직접 재생 / 정지 버튼을 눌렀을 때
    const togglePlayPause = () => {
        const audio = audioRef.current;

        if (!audio) return;

        if (audio.paused) {
            audio.play().catch((error) => {
                console.error("오디오 재생 실패:", error);
            });
        } else {
            audio.pause();
        }
    };

    return {
        isPlaying,
        togglePlayPause,
    };
};