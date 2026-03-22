import styles from './index.module.css'
import Typography from "@mui/material/Typography";
import WeddingMap from "../map/index";
import {LOCATION, LOCATION_CONTACT} from "../../constants/location";
import locationImg from '@/assets/image/location.png';


const Location = () => {
    return (
        <>
            <div style={{backgroundColor: '#f0f0f0'}}>
                <div className={styles.container}>
                    <img src={locationImg} alt="location"/>
                    {/*<Typography variant="h3" color='textSecondary'>Location</Typography>*/}
                    <p className={styles.location}>
                        {LOCATION}
                    </p>
                    <p className={styles.locationDetail}>
                        {LOCATION_CONTACT.address}
                    </p>
                    <p className={styles.locationDetail}>
                        {LOCATION_CONTACT.phoneNumber}
                    </p>
                    <WeddingMap/>
                </div>

            </div>
        </>
    )
}


export default Location;