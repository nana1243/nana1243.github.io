import {LOCATION_CONTACT, LOCATION_NAVI_URL, NAVI_ICONS, NAVI_LABELS, WEB_NAVI_URL} from "../../constants/location";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

const LocationInfo = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, p: 2}}>
            {/* 버스 안내 */}
            <Box>
                <Typography variant="h6" sx={{color: '#666666'}}>
                    버스안내
                </Typography>
                <Typography variant="body1" sx={{color: '#666666'}}>
                    강서07, 931, 6642, 6645, 6648 마곡나루역5번출구.서울식물원 정류장 하차
                </Typography>
            </Box>

            {/* 자가용 안내 */}
            <Box>
                <Typography variant="h6" sx={{color: '#666666'}}>
                    자가용안내
                </Typography>
                <Typography variant="body1" sx={{color: '#666666'}}>
                    마곡나루역 3번 출구 앞 서울식물원 방향으로 150m 직진
                </Typography>
            </Box>

            {/* 지하철 안내 */}
            <Box>
                <Typography variant="h6" sx={{color: '#666666'}}>
                    지하철 안내
                </Typography>
                <Typography variant="body1" sx={{color: '#666666'}}>
                    9호선·공항철도 마곡나루역 3번 출구에서 서울식물원 방향으로 150m
                </Typography>
            </Box>

            {/* 주차 안내 */}
            <Box>
                <Typography variant="h6" sx={{color: '#666666'}}>
                    주차안내
                </Typography>
                <Typography variant="body1" sx={{color: '#666666'}}>
                    호텔 내 지하 주차장 이용 (하객 무료 주차)
                </Typography>
            </Box>

            {/* 피로연 안내 */}
            <Box>
                <Typography variant="h6" sx={{color: '#666666'}}>
                    피로연 안내
                </Typography>
                <Typography variant="body1" sx={{color: '#666666'}}>
                    지상 1층 가든 키친 뷔페
                </Typography>
            </Box>
        </Box>
    );
}

const Navi = () => {
    const naviLists = Object.keys(LOCATION_NAVI_URL);

    const handleNaviClick = (navi: keyof typeof LOCATION_NAVI_URL) => {
        // 1. 클릭한 서비스에 맞는 앱 URL과 웹 URL을 가져옵니다.
        const appUrl = LOCATION_NAVI_URL[navi];
        const webUrl = WEB_NAVI_URL[navi as keyof typeof WEB_NAVI_URL];

        const start = Date.now();

        window.location.href = appUrl;

        // 3. 2초 동안 반응이 없다면 앱이 없다고 판단하고 웹으로 이동
        setTimeout(() => {
            const delta = Date.now() - start;
            if (delta < 2500) {
                window.open(webUrl, '_blank');
            }
        }, 2000);
    };

    return (
        <div>
            <Stack direction="row" spacing={3} justifyContent="center" sx={{mt: 2}}>
                {naviLists.map((navi) => (
                    <Button
                        key={navi}
                        startIcon={
                            <img
                                src={NAVI_ICONS[navi as keyof typeof NAVI_ICONS]}
                                alt={navi}
                                style={{width: 20, height: 20, borderRadius: '4px'}}
                            />
                        }
                        onClick={() => handleNaviClick(navi as keyof typeof LOCATION_NAVI_URL)}
                    >
                        {NAVI_LABELS[navi as keyof typeof NAVI_LABELS]}
                    </Button>
                ))}
            </Stack>
            <LocationInfo/>
        </div>
    );
};

export default Navi;