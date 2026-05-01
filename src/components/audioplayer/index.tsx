import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import audioFile from '@/assets/audio/blueming.mp3';
import {useEffect, useRef, useState} from "react";

const AudioPlayer = () => {
    const theme = useTheme();
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio)
            return;
        const handleEnded = () => {
            setIsPlaying(false);
        };
        const handlePause = () => {
            setIsPlaying(false);
        };
        const handlePlay = () => {
            setIsPlaying(true);
        };
        // 에러 핸들링
        const handleError = (e: Event) => {
            console.error('오디오 재생 오류:', e);
            setIsPlaying(false);
        };
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('play', handlePlay);
        audio.addEventListener('error', handleError);
        return () => {
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('error', handleError);
        };
    }, []);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src={audioFile}
                onLoadedData={() => {
                    if (isPlaying && audioRef.current) {
                        audioRef.current.play();
                    }
                }}
            />
            <Box sx={{display: 'flex', alignItems: 'left', pl: 1, pb: 0.5}}>
                <IconButton
                    size="small"
                    aria-label="play/pause"
                    onClick={togglePlayPause}
                    sx={{
                        p: 1.5,
                        backgroundColor: '#9E9E9E',
                    }}
                >
                    {isPlaying ? <PauseIcon sx={{height: 28, width: 28}}/> :
                        <PlayArrowIcon sx={{height: 28, width: 28}}/>}
                </IconButton>
            </Box>
        </>
    );
}
export default AudioPlayer;