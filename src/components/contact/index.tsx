import styles from './index.module.css';
import ContactBoard from "../contact-board";

const Contact = () => {
    return (
        <div className={styles.container}>
            {/* 이전 카드들과 똑같은 크기의 하얀 카드 프레임 */}
            <div className={styles.cardFrame}>
                {/* 필요하다면 카드 상단에 타이틀을 넣을 수 있습니다 */}
                <h2 className={styles.title}>Contact</h2>

                {/* 기존 연락처 보드 레이아웃 */}
                <div className={styles.boardWrapper}>
                    <ContactBoard groupName='groom' />
                    <ContactBoard groupName='bride' />
                </div>
            </div>
        </div>
    );
}

export default Contact;