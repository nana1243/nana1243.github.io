import styles from './index.module.css';
import account from '@/assets/image/account.png';
import Typography from "@mui/material/Typography";
import ACCOUNT_DATA from "../../constants/account";
import AccordionItem from "./AccordionItem";

const Account = () => {

    return (
        <div className={styles.container}>
            <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                    color: '#888888',         /* 글자색: 부드러운 회색 (또는 'text.secondary') */
                    fontWeight: 400,           /* 굵기: 기본(Regular) 또는 조금 더 얇게 원하면 300 */
                    letterSpacing: '0.08em'
                }}
            >
                Account
            </Typography>
            {/* 💡 정중한 마음 전하기 안내 문구 */}
            <Typography
                variant="body2"
                align="center"
                sx={{
                    color: '#666666',
                    lineHeight: 1.8,
                    letterSpacing: '-0.01em',
                    marginBottom: '32px', // 아코디언과의 간격
                    fontSize: '14px',
                    whiteSpace: 'pre-line' // 줄바꿈(\n)이 화면에 그대로 보이게 설정
                }}
            >
                {`축하의 마음을 담아 보내주신 축의금은\n두 사람의 새로운 출발에 소중하게 사용하겠습니다.\n\n따뜻한 마음에 깊이 감사드립니다.`}
            </Typography>

            <AccordionItem
                type="open"
                title="신랑측 마음 전하실 곳"
                accounts={ACCOUNT_DATA.groom}
            />

            <AccordionItem
                type="closed"
                title="신부측 마음 전하실 곳"
                accounts={ACCOUNT_DATA.bride}
            />
        </div>
    );
}


export default Account;