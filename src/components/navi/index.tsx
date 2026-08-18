import {LOCATION_CONTACT, LOCATION_NAVI_URL, NAVI_ICONS, NAVI_LABELS, WEB_NAVI_URL} from "../../constants/location";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styles from './index.module.css';

const LocationInfo = () => {
    return (
        <div className={styles.infoContainer}>
            {/* 버스 안내 */}
            <div className={styles.infoSection}>
                <span className={styles.infoTitle}>버스 안내</span>
                <p className={styles.infoDesc}>
                    마곡나루역 하차 · 지선 6642
                </p>
                <p className={styles.infoDesc}>
                    마곡나루역 1번 출구 하차 · 지선 6645, 6648
                </p>
                <p className={styles.infoDesc}>
                    마곡나루역 1번 출구 하차 · 마을 강서05-1
                </p>

            </div>
            {/* 자가용 안내 */}
            <div className={styles.infoSection}>
                <span className={styles.infoTitle}>자가용 안내</span>
                <p className={styles.infoDesc}>
                    마곡나루역 3번 출구 앞 서울식물원 방향으로 150m 직진
                </p>
            </div>

            {/* 지하철 안내 */}
            <div className={styles.infoSection}>
                <span className={styles.infoTitle}>지하철 안내</span>
                <p className={styles.infoDesc}>
                    9호선 마곡나루역 2번 출구 도보 3분
                </p>
                <p className={styles.infoDesc}>
                    공항철도 마곡나루역 3번 출구 도보 3분
                </p>
            </div>

            {/* 주차 안내 */}
            <div className={styles.infoSection}>
                <span className={styles.infoTitle}>주차 안내</span>
                <p className={styles.infoDesc}>
                    호텔 로비 정산 등록 시 3시간 무료
                </p>
            </div>

            {/* 피로연 안내 */}
            <div className={styles.infoSection}>
                <span className={styles.infoTitle}>식사 안내</span>
                <p className={styles.infoDesc}>
                    지상 1층 가든 키친 뷔페
                </p>
            </div>
        </div>

    );
}

const Navi = () => {
    const naviLists = Object.keys(LOCATION_NAVI_URL);

    const handleNaviClick = (navi: keyof typeof LOCATION_NAVI_URL) => {
        const appUrl = LOCATION_NAVI_URL[navi];
        const webUrl = WEB_NAVI_URL[navi as keyof typeof WEB_NAVI_URL];

        const start = Date.now();
        window.location.href = appUrl;

        setTimeout(() => {
            const delta = Date.now() - start;
            if (delta < 2500) {
                window.open(webUrl, '_blank');
            }
        }, 2000);
    };

    return (
        <div style={{width: '100%'}}>
            <div className={styles.naviContainer}>
                <Stack direction="row" spacing={1.5} justifyContent="center">
                    {naviLists.map((navi) => (
                        <Button
                            key={navi}
                            variant="outlined"
                            startIcon={
                                <img
                                    src={NAVI_ICONS[navi as keyof typeof NAVI_ICONS]}
                                    alt={navi}
                                    style={{width: 16, height: 16, borderRadius: '4px'}}
                                />
                            }
                            onClick={() => handleNaviClick(navi as keyof typeof LOCATION_NAVI_URL)}
                            sx={{
                                borderColor: '#eae7e4',
                                color: '#666666',
                                fontSize: '0.8rem',
                                padding: '6px 12px',
                                fontFamily: "'Nanum Myeongjo', serif",
                                fontWeight: 600,
                                textTransform: 'none',
                                '&:hover': {
                                    borderColor: '#8c8276',
                                    backgroundColor: 'rgba(140, 130, 118, 0.04)',
                                }
                            }}
                        >
                            {NAVI_LABELS[navi as keyof typeof NAVI_LABELS]}
                        </Button>
                    ))}
                </Stack>
            </div>
            <LocationInfo/>
        </div>
    );
};

export default Navi;