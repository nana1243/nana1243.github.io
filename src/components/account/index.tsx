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
            {/* 신랑측: 파란 테두리 (open) */}
            <AccordionItem
                type="open"
                title="신랑측 마음 전하실 곳"
                accounts={ACCOUNT_DATA.groom}
            />

            {/* 신부측: 회색 테두리 (closed) */}
            <AccordionItem
                type="closed"
                title="신부측 마음 전하실 곳"
                accounts={ACCOUNT_DATA.bride}
            />
        </div>
    );
}


export default Account;