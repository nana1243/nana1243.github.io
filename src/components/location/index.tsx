import styles from './index.module.css'
import Typography from "@mui/material/Typography";
import WeddingMap from "../map/index";

const Location = () => {
    return (
        <>
            <div style={{backgroundColor: '#f0f0f0'}}>
                <div className={styles.container}>
                    <Typography variant="h3" color='textSecondary'>Location</Typography>
                    <p>
                        마곡 코트야드 메리어트 포레스트 볼룸
                    </p>
                    <p>
                        서울 강서구 마곡중앙12로 10
                        02-6946-7000
                    </p>
                    <WeddingMap/>
                </div>

            </div>
        </>
    )
}


export default Location;