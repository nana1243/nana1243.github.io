import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Snackbar,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from './index.module.css';
import Button from "@mui/material/Button";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from "react";

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

const AccordionItem = ({type, title, accounts}: AccordionItemProps) => {
    const [expanded, setExpanded] = useState<boolean>(type === 'open');
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleChange = (
        event: React.SyntheticEvent,
        isExpanded: boolean
    ) => {
        setExpanded(isExpanded);
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setSnackbarOpen(true);
            })
            .catch((err) => {
                console.error('복사 실패:', err);
            });
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const borderColor = '#eae7e4';

    return (
        <>
            <Accordion
                disableGutters
                elevation={0}
                expanded={expanded}
                onChange={handleChange}
                sx={{
                    width: '100%',
                    border: `1px solid ${borderColor}`,
                    borderRadius: '6px !important',
                    overflow: 'hidden',
                    backgroundColor: '#faf9f8',
                    '&:before': {
                        display: 'none',
                    },
                }}
            >
                <AccordionSummary
                    expandIcon={
                        <ExpandMoreIcon
                            sx={{
                                color: expanded ? '#8c8276' : '#aaaaaa',
                                fontSize: '20px',
                            }}
                        />
                    }
                    sx={{
                        padding: '12px 20px',
                        backgroundColor: expanded ? '#f5f3f1' : '#faf9f8',
                        transition: 'background-color 0.2s',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            color: '#555555',
                            fontFamily: "'Nanum Myeongjo', serif",
                            letterSpacing: '0.5px',
                        }}
                    >
                        {title}
                    </Typography>
                </AccordionSummary>

                <AccordionDetails
                    sx={{
                        padding: '16px 20px',
                        backgroundColor: '#ffffff',
                    }}
                >
                    {accounts.map((acc, index) => (
                        <div
                            key={index}
                            className={styles.accountRow}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: index !== 0 ? '12px 0 0 0' : '0',
                                borderTop:
                                    index !== 0
                                        ? '1px dashed #eae7e4'
                                        : 'none',
                            }}
                        >
                            <div className={styles.accountInfo}>
                                <Typography
                                    sx={{
                                        fontSize: '0.85rem',
                                        color: '#444444',
                                        fontFamily: "'Nanum Myeongjo', serif",
                                        marginBottom: '4px',
                                    }}
                                >
                                    <strong style={{color: '#8c8276'}}>
                                        {acc.bank}
                                    </strong>{' '}
                                    {acc.number}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: '0.8rem',
                                        color: '#777777',
                                        fontFamily: "'Nanum Myeongjo', serif",
                                    }}
                                >
                                    예금주 :{' '}
                                    <span style={{fontWeight: 600}}>
                                        {acc.holder}
                                    </span>
                                </Typography>
                            </div>

                            <Button
                                variant="contained"
                                onClick={() => handleCopy(acc.number)}
                                sx={{
                                    backgroundColor: '#f3efeb',
                                    color: '#7c7368',
                                    boxShadow: 'none',
                                    borderRadius: '4px',
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

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={2000}
                onClose={handleSnackbarClose}
                message="계좌번호가 복사되었습니다."
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            />
        </>
    );
};

export default AccordionItem;