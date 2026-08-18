import styles from './index.module.css';

const Information = () => {

    const greetingLines = [
        "봄의 설렘으로 시작해",
        "여름의 뜨거움과",
        "가을의 깊이.",
        "겨울의 따스함을 함께 나눴습니다.",
        "\n",
        "이제 다가올 모든 계절을 나란히 걸으며",
        "서로의 다정한 계절이 되어주려 합니다.",
        "\n",
        "저희가 함께 맞이할 첫 계절의 문턱에서",
        "소중한 분들의 축복을 받고 싶습니다."
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