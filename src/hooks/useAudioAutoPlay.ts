import { useEffect, useState, RefObject } from "react";

export const useAudioAutoPlay = (audioRef: RefObject<HTMLAudioElement | null>) => {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // 브라우저 차단을 풀기 위한 일회성 함수
        const handleUserInteraction = () => {
            if (audio.paused) {
                audio.play()
                    .then(() => cleanUpListeners()) // 성공 시 이벤트 완전 제거
                    .catch((err) => console.log("인터랙션 후 재생 실패:", err));
            }
        };

        const cleanUpListeners = () => {
            ['click', 'touchstart', 'keydown'].forEach(event =>
                window.removeEventListener(event, handleUserInteraction)
            );
        };

        // 우선 바로 재생을 시도해봅니다 (사용자가 이전에 사이트와 상호작용이 있었을 경우 성공함)
        audio.play()
            .then(() => console.log("자동 재생 성공!"))
            .catch(() => {
                // 실패했다면 (브라우저가 막았다면) 그제서야 이벤트 리스너를 등록합니다.
                console.log("브라우저 차단됨 -> 유저 클릭 대기 중...");
                ['click', 'touchstart', 'keydown'].forEach(event =>
                    window.addEventListener(event, handleUserInteraction, { passive: true })
                );
            });

        return () => cleanUpListeners();
    }, [audioRef]);

    // 오디오 상태 동기화 (기존 코드와 동일)
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleEnded = () => setIsPlaying(false);

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [audioRef]);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(e => console.error("재생 실패:", e));
        }
    };

    return { isPlaying, togglePlayPause };
};