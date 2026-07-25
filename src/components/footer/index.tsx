import {useEffect} from 'react';
import styles from './index.module.css';
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Stack from '@mui/material/Stack';

declare global {
    interface Window {
        Kakao: any;
    }
}
const Footer = () => {
    // 1. 카카오 SDK 초기화
    useEffect(() => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
            window.Kakao.init('52b6138a59a079de300263322ddb290f');
        }
    }, []);


    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => alert('청첩장 링크가 복사되었습니다.'))
            .catch((err) => console.error('링크 복사 실패:', err));
    };

    // 💬 카카오톡 공유 함수
    const handleKakaoShare = () => {
        if (!window.Kakao) {
            alert('카카오톡 SDK를 불러오지 못했습니다.');
            return;
        }

        const shareUrl = window.location.href;

        window.Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '준엽 ❤ 희은 소중한 날에 초대를 보냅니다.',
                description: '저희 두 사람의 새로운 시작을 함께 축복해 주세요.',
                imageUrl: 'https://nana1243.github.io/welcome.jpg',
                link: {
                    mobileWebUrl: shareUrl,
                    webUrl: shareUrl,
                },
            },
            buttons: [
                {
                    title: '청첩장 보러가기',
                    link: {
                        mobileWebUrl: shareUrl,
                        webUrl: shareUrl,
                    },
                },
            ],
        });
    };

    return (
        <div className={styles.footerContainer}>
            {/* 1. 하객들을 위한 공유 버튼 영역 */}
            <Stack direction="row" spacing={1.5} justifyContent="center" sx={{mb: 3}}>
                <Button
                    variant="outlined"
                    startIcon={<ShareIcon sx={{fontSize: '14px !important'}}/>}
                    onClick={handleKakaoShare}
                    sx={{
                        borderColor: '#eae7e4',
                        color: '#8c8276',
                        fontSize: '0.8rem',
                        fontFamily: "'Nanum Myeongjo', serif",
                        padding: '6px 14px',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                            borderColor: '#8c8276',
                            backgroundColor: 'rgba(140, 130, 118, 0.04)',
                        }
                    }}
                >
                    카카오톡 공유
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<ContentCopyIcon sx={{fontSize: '14px !important'}}/>}
                    onClick={handleCopyLink}
                    sx={{
                        borderColor: '#eae7e4',
                        color: '#8c8276',
                        fontSize: '0.8rem',
                        fontFamily: "'Nanum Myeongjo', serif",
                        padding: '6px 14px',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                            borderColor: '#8c8276',
                            backgroundColor: 'rgba(140, 130, 118, 0.04)',
                        }
                    }}
                >
                    링크 복사하기
                </Button>
            </Stack>

            <p className={styles.copyright}>
                Copyright 2026. 준엽 ❤ 희은. All rights reserved.
            </p>
            <p className={styles.developer}>
                Made by{' '}
                <a
                    href="https://github.com/nana1243/nana1243.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                >
                    nana1243
                </a>
            </p>
        </div>
    );
};

export default Footer;