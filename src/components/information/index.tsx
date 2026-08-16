import styles from './index.module.css';

const Information = () => {

    const greetingLines = [
        "봄은 꽃을 피우고,",
        "여름이 푸르름을 더하듯",
        "저희도 서로의 곁에서",
        "아름다운 계절을 만들어가려 합니다.",
        "새로운 시작의 순간을",
        "함께해 주시면 감사하겠습니다."
    ];

    return (
        <div className={styles.container}>
            {/* 9:16 프레임과 동일한 스타일의 카드 프레임으로 감싸줍니다 */}
            <div className={styles.cardFrame}>
                <h2 className={styles.title}>Invitation</h2>

                {greetingLines.map((line, index) => (
                    <p key={index} className={styles.letter}>
                        {line}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Information;