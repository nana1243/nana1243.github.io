import styles from './index.module.css'
import Typography from "@mui/material/Typography";
import WeddingMap from "../map/index";
import {LOCATION, LOCATION_CONTACT} from "../../constants/location";
import locationImg from '@/assets/image/location.png';
import Button from "@mui/material/Button";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Stack from '@mui/material/Stack'; // 버튼 간격을 위해 추천
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Location = () => {
    return (
        <div style={{backgroundColor: '#f0f0f0'}}>
            <div className={styles.container}>
                <img src={locationImg} alt="location"/>
                <p className={styles.location}>
                    {LOCATION}
                </p>
                <p className={styles.locationDetail}>
                    {LOCATION_CONTACT.address}
                </p>
                <p className={styles.locationDetail}>
                    {LOCATION_CONTACT.phoneNumber}
                </p>

                <Stack direction="row" spacing={5} justifyContent="center" sx={{my: 2}}>
                    <Button
                        variant="outlined"
                        startIcon={<LocationOnIcon/>}
                        onClick={() => window.open(`https://map.kakao.com/?q=${LOCATION_CONTACT.address}`)}
                    >
                        지도
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<LocalPhoneIcon/>}
                        onClick={() => window.location.href = `tel:${LOCATION_CONTACT.phoneNumber}`}
                    >
                        전화하기
                    </Button>
                </Stack>

                <WeddingMap/>
            </div>
        </div>
    )
}

export default Location;