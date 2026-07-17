import styles from './index.module.css'
import Typography from "@mui/material/Typography";
import WeddingMap from "../map/index";
import { LOCATION, LOCATION_CONTACT } from "../../constants/location";
import Button from "@mui/material/Button";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Stack from '@mui/material/Stack';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Navi from "../navi";

const Location = () => {
    return (
        <div className={styles.container}>
            {/* 다른 카드들과 완벽하게 싱크로율을 맞춘 하얀 카드 프레임 */}
            <div className={styles.cardFrame}>
                {/* 텍스트 타이틀로 변경 */}
                <h2 className={styles.title}>Location</h2>

                <p className={styles.location}>
                    {LOCATION}
                </p>
                <p className={styles.locationDetail}>
                    {LOCATION_CONTACT.address}
                </p>
                <p className={styles.locationDetail}>
                    {LOCATION_CONTACT.phoneNumber}
                </p>

                <Stack direction="row" spacing={2} justifyContent="center" sx={{ my: 3 }}>
                    <Button
                        variant="outlined"
                        startIcon={<LocationOnIcon/>}
                        onClick={() => window.open(`https://map.kakao.com/?q=${LOCATION_CONTACT.address}`)}
                        sx={{
                            borderColor: '#8c8276',
                            color: '#8c8276',
                            '&:hover': {
                                borderColor: '#7a6f63',
                                backgroundColor: 'rgba(140, 130, 118, 0.04)'
                            }
                        }}
                    >
                        지도 보기
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<LocalPhoneIcon/>}
                        onClick={() => window.location.href = `tel:${LOCATION_CONTACT.phoneNumber}`}
                        sx={{
                            borderColor: '#8c8276',
                            color: '#8c8276',
                            '&:hover': {
                                borderColor: '#7a6f63',
                                backgroundColor: 'rgba(140, 130, 118, 0.04)'
                            }
                        }}
                    >
                        전화하기
                    </Button>
                </Stack>

                {/* 지도와 내비게이션 앱 연결 영역 */}
                <div className={styles.mapWrapper}>
                    <WeddingMap />
                    <Navi />
                </div>
            </div>
        </div>
    );
}

export default Location;