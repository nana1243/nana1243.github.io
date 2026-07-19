import { useRef } from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import audioFile from '@/assets/audio/blueming.mp3';
import { useAudioAutoPlay } from "../../hooks/useAudioAutoPlay";

const AudioPlayer = () => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const { isPlaying, togglePlayPause } = useAudioAutoPlay(audioRef);

    return (
        <>
            <audio ref={audioRef} src={audioFile} preload="auto" />
            <Box sx={{ display: 'flex', alignItems: 'left', pl: 1, pb: 0.5 }}>
                <IconButton
                    size="small"
                    aria-label="play/pause"
                    onClick={togglePlayPause}
                    sx={{
                        p: 1,
                        backgroundColor: '#9E9E9E',
                        color: '#ffffff',
                        '&:hover': { backgroundColor: '#757575' }
                    }}
                >
                    {isPlaying ? <PauseIcon sx={{ height: 28, width: 28 }} /> :
                        <PlayArrowIcon sx={{ height: 28, width: 28 }} />}
                </IconButton>
            </Box>
        </>
    );
};

export default AudioPlayer;