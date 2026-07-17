import styles from './index.module.css';
import account from '@/assets/image/account.png';
import Typography from "@mui/material/Typography";
import ACCOUNT_DATA from "../../constants/account";
import AccordionItem from "./AccordionItem";

const Account = () => {

    return (
        <div className={styles.container}>
            <div className={styles.cardFrame}>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{
                        color: '#8c8276',          /* 이전 카드들과 일치하는 고급스러운 베이지/브라운 톤 */
                        fontWeight: 700,           /* 타이틀 굵기 통일 */
                        fontSize: '1.2rem',        /* 타이틀 크기 통일 */
                        letterSpacing: '4px',      /* 자간 통일 */
                        fontFamily: "'Nanum Myeongjo', serif", /* 폰트 통일 */
                        marginBottom: '35px',      /* 타이틀 아래 간격 */
                        textTransform: 'none'
                    }}
                >
                    Account
                </Typography>

                {/* 💡 정중한 마음 전하기 안내 문구 */}
                <Typography
                    variant="body2"
                    align="center"
                    sx={{
                        color: '#444444',          /* 이전 글자색과 통일 */
                        lineHeight: 2.0,           /* 줄간격 통일 */
                        letterSpacing: '-0.01em',
                        marginBottom: '32px',      /* 아코디언과의 간격 */
                        fontSize: '0.95rem',       /* 본문 글자 크기 통일 */
                        fontFamily: "'Nanum Myeongjo', serif", /* 폰트 통일 */
                        whiteSpace: 'pre-line'
                    }}
                >
                    {`축하의 마음을 담아 보내주신 축의금은\n두 사람의 새로운 출발에 소중하게 사용하겠습니다.\n\n따뜻한 마음에 깊이 감사드립니다.`}
                </Typography>

                {/* 아코디언 아이템들을 감싸는 영역 */}
                <div className={styles.accordionWrapper}>
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
            </div>
        </div>
    );
}

export default Account;