import CallIcon from '@mui/icons-material/Call';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ContactItemProps {
    title: string;
    name?: string;
    phoneNumber: string;
}

const ContactItem = (props: ContactItemProps) => {
    const { title, name, phoneNumber } = props;

    return (
        <Box sx={{ textAlign: 'center', p: 1 }}>
            {/* 1. 타이틀 영역 ("신랑", "신부", "아버지", "어머니" 등) */}
            <Typography sx={{
                fontFamily: "'Nanum Myeongjo', serif",
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#555555',
                letterSpacing: '0.5px',
                mb: name ? 0.3 : 1 // 이름이 있으면 여백을 좁게, 본인이면 버튼과의 간격을 적당히 줌
            }}>
                {title}
            </Typography>

            {/* 2. 이름 영역 (혼주와 같이 이름이 존재할 때만 자연스럽게 줄바꿈하여 표시) */}
            {name && (
                <Typography sx={{
                    fontFamily: "'Nanum Myeongjo', serif",
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#222222',
                    mb: 1
                }}>
                    {name}
                </Typography>
            )}

            {/* 3. 통화 연결 버튼 */}
            <IconButton
                component="a"
                href={`tel:${phoneNumber}`}
                sx={{
                    color: '#8c8276', // 아이콘 색상도 차분한 웜 그레이 베이지 톤으로 변경
                    '&:hover': { backgroundColor: 'rgba(140, 130, 118, 0.08)' }
                }}
            >
                <CallIcon fontSize="medium" /> {/* 기존 large에서 화면 비율상 딱 알맞은 medium으로 다듬었습니다 */}
            </IconButton>

            {/* 4. 문자 메시지 연결 버튼 */}
            <IconButton
                component="a"
                href={`sms:${phoneNumber}`}
                aria-label="문자 보내기"
                sx={{
                    ml: 1,
                    color: '#8c8276',
                    '&:hover': { backgroundColor: 'rgba(140, 130, 118, 0.08)' }
                }}
            >
                <EmailIcon fontSize="medium" />
            </IconButton>
        </Box>
    );
};

export default ContactItem;