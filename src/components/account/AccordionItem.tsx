import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from './index.module.css';
import Button from "@mui/material/Button";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

interface AccountInfo {
    bank: string;
    number: string;
    holder: string;
}

interface AccordionItemProps {
    type: 'open' | 'closed';
    title: string;
    accounts: AccountInfo[];
}

const AccordionItem = ({ type, title, accounts }: AccordionItemProps) => {
    const [expanded, setExpanded] = useState<boolean>(type === 'open');

    const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded);
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => alert('계좌번호가 복사되었습니다.'))
            .catch((err) => console.error('복사 실패:', err));
    };

    // 아주 은은하고 차분한 테두리 컬러 적용
    const borderColor = '#eae7e4';

    return (
        <Accordion
            disableGutters
            elevation={0}
            expanded={expanded}
            onChange={handleChange}
            sx={{
                width: '100%',
                border: `1px solid ${borderColor}`,
                borderRadius: '6px !important', // 모서리를 둥글게 처리하여 카드 형태 유지
                overflow: 'hidden',
                backgroundColor: '#faf9f8', // 미세한 미색을 주어 편안한 느낌
                '&:before': { display: 'none' }, // mui 자체 구분선 제거
            }}
        >
            <AccordionSummary
                expandIcon={
                    <ExpandMoreIcon sx={{ color: expanded ? '#8c8276' : '#aaaaaa', fontSize: '20px' }} />
                }
                sx={{
                    padding: '12px 20px',
                    backgroundColor: expanded ? '#f5f3f1' : '#faf9f8', // 열렸을 때 부드러운 컬러 교체
                    transition: 'background-color 0.2s'
                }}
            >
                <Typography sx={{
                    fontSize: '0.95rem', // 모바일에 어울리는 세련된 크기
                    fontWeight: 600,
                    color: '#555555',
                    fontFamily: "'Nanum Myeongjo', serif",
                    letterSpacing: '0.5px'
                }}>
                    {title}
                </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ padding: '16px 20px', backgroundColor: '#ffffff' }}>
                {accounts.map((acc, index) => (
                    <div key={index} className={styles.accountRow} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: index !== 0 ? '12px 0 0 0' : '0',
                        borderTop: index !== 0 ? '1px dashed #eae7e4' : 'none' // 여러 계좌일 시 은은한 점선 구분
                    }}>
                        <div className={styles.accountInfo}>
                            <Typography sx={{
                                fontSize: '0.85rem',
                                color: '#444444',
                                fontFamily: "'Nanum Myeongjo', serif",
                                marginBottom: '4px'
                            }}>
                                <strong style={{ color: '#8c8276' }}>{acc.bank}</strong> {acc.number}
                            </Typography>

                            <Typography sx={{
                                fontSize: '0.8rem',
                                color: '#777777',
                                fontFamily: "'Nanum Myeongjo', serif"
                            }}>
                                예금주 : <span style={{ fontWeight: 600 }}>{acc.holder}</span>
                            </Typography>
                        </div>

                        <Button
                            variant="contained"
                            onClick={() => handleCopy(acc.number)}
                            sx={{
                                backgroundColor: '#f3efeb', // 은은한 살구/베이지빛 톤온톤 버튼
                                color: '#7c7368',
                                boxShadow: 'none',
                                borderRadius: '4px', // 너무 동그란 캡슐형보다 사각형이 단정함
                                padding: '4px 12px',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                fontFamily: "'Nanum Myeongjo', serif",
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: '#e8e2dc',
                                    boxShadow: 'none',
                                },
                            }}
                        >
                            복사
                        </Button>
                    </div>
                ))}
            </AccordionDetails>
        </Accordion>
    );
};

export default AccordionItem;