import styles from './index.module.css';
import  welcome from '../../assets/image/welcome1.jpg';

const Greeting = () => {
    return (
        <div className={styles.container}>
            {/* 9:16 비율을 강제하고 요소를 위아래(세로)로 정렬할 카드 프레임 */}
            <div className={styles.cardFrame}>

                {/* 1. 이미지 영역 */}
                <div className={styles.imageWrapper}>
                    <img
                        src={welcome}
                        alt="wedding"
                        className={styles.contentImage}
                    />
                </div>

                {/* 2. 텍스트 영역 */}
                <div className={styles.infoArea}>
                    <div className={styles.names}>
                        <span>김준엽</span>
                        <span className={styles.divider}>|</span>
                        <span>최희은</span>
                    </div>
                    <div className={styles.details}>
                        <p className={styles.date}>2026.11.22 SUN PM 12:00</p>
                        <p className={styles.location}>코트야드 메리어트 서울 보타닉 파크 Forest Ballroom</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Greeting;