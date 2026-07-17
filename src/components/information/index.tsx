import styles from './index.module.css';

const Information = () => {
    const greetingLines = [
        "스쳐 지나가는 작은 웃음소리 하나마저도",
        "서로에게 커다란 의미가 되는 단짝을 만났습니다.",
        "낙엽이 지고 계절이 여물어가는 11월의 어느 멋진 날,",
        "더 이상 옆구리 시리지 않게 평생 꼭 붙어 살기로 했습니다.",
        "따뜻한 코트 한 벌 걸치고 오셔서",
        "저희의 유쾌하고 훈훈한 계약을 축하해 주세요!"
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