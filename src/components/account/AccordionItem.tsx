import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
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


    const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded);
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => alert('복사되었습니다!'))
            .catch((err) => console.error('복사 실패:', err));
    };


    const borderColor = expanded ? '#222222' : '#e5e5e5';
    const borderWidth = expanded ? '2px' : '1px';

    return (
        <Accordion
            disableGutters
            elevation={0}
            expanded={expanded}
            onChange={handleChange}
            sx={{
                width: '100%',
                maxWidth: '450px',
                border: `${borderWidth} solid ${borderColor}`,
                marginBottom: '16px',
            }}
        >
            <AccordionSummary
                expandIcon={
                    <ExpandMoreIcon sx={{color: expanded ? '#2B66CC' : 'inherit'}}/>}
                sx={{padding: '16px 24px'}}
            >
                <Typography sx={{fontSize: '18px', fontWeight: 'bold', color: '#333'}}>
                    {title}
                </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{padding: '0 24px 24px 24px', backgroundColor: '#fff'}}>
                {accounts.map((acc, index) => (
                    <div key={index} className={styles.accountRow}>
                        <div className={styles.accountInfo}>
                            <Typography sx={{fontSize: '16px', color: '#222'}}>
                                <span className={styles.bankName}>{acc.bank}</span> {acc.number}
                            </Typography>


                            <Typography sx={{fontSize: '15px', color: '#555'}}>
                                예금주 : <strong>{acc.holder}</strong>
                            </Typography>
                        </div>


                        <Button
                            variant="contained"
                            onClick={() => handleCopy(acc.number)}
                            sx={{
                                backgroundColor: '#f1f3f5',
                                color: '#666',
                                boxShadow: 'none',
                                borderRadius: '20px',
                                padding: '6px 16px',
                                fontSize: '13px',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: '#e9ecef',
                                    boxShadow: 'none',
                                },
                            }}
                        >
                            복사하기
                        </Button>
                    </div>
                ))}
            </AccordionDetails>
        </Accordion>
    );
};

export default AccordionItem;