import ContactItem from "../contact-item";
import { CONTACT_BRIDE_GROOM_INFO } from "../../constants/contact";
import { CONTACT_FAMILY_INFO } from "../../constants/contact";
import styles from './index.module.css';

interface ContactBoardProps {
    groupName: 'groom' | 'bride';
}

const ContactBoard = (props: ContactBoardProps) => {
    const { groupName } = props;
    const contactInfo = CONTACT_BRIDE_GROOM_INFO[groupName];
    const contactFamily = CONTACT_FAMILY_INFO.filter(contact => contact.relationShip === groupName);

    const relationship = groupName === 'groom' ? '신랑측' : '신부측';

    return (
        <div className={styles.container}>
            {/* 신랑 또는 신부 본인 연락처 */}
            <div className={styles.mainContact}>
                <ContactItem
                    title={contactInfo.title}
                    phoneNumber={contactInfo?.phoneNumber}
                />
            </div>

            {/* '신랑측 혼주' / '신부측 혼주' 타이틀 */}
            <p className={styles.familyTitle}>
                {relationship} 혼주
            </p>

            {/* 혼주 연락처 리스트 */}
            <div className={styles.familyList}>
                {contactFamily.map((contact, index) => (
                    <ContactItem
                        key={index}
                        title={contact.title}
                        name={contact.name}
                        phoneNumber={contact.phoneNumber}
                    />
                ))}
            </div>
        </div>
    )
}

export default ContactBoard;