import { LOCATION_CONTACT, LOCATION_NAVI_URL, NAVI_LABELS } from "../../constants/location";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Navi = () => {
    const naviLists = Object.keys(LOCATION_NAVI_URL);

    const handleNaviClick = (navi: keyof typeof LOCATION_NAVI_URL) => {
        const appUrl = LOCATION_NAVI_URL[navi];

        const webUrl = navi === 'kakao'
            ? `https://map.kakao.com/link/to/${LOCATION_CONTACT.address}`
            : `https://map.naver.com/v5/search/${encodeURIComponent(LOCATION_CONTACT.address)}`;

        const start = Date.now();

        window.location.href = appUrl;

        // 2. 2초 동안 반응이 없다면 (앱이 안 열려서 페이지가 안 가려졌다면) 웹으로 이동
        setTimeout(() => {
            // 사용자가 앱으로 이동했다면 이 시간 차이가 2.5초 이상 벌어집니다.
            // 2.5초 미만이라면 앱이 실행되지 않고 브라우저에 계속 머물러 있는 상태로 판단합니다.
            if (Date.now() - start < 2500) {
                window.open(webUrl, '_blank');
            }
        }, 2000);
    };

    return (
        <Stack direction="row" spacing={3} justifyContent="center" sx={{ mt: 2 }}>
            {naviLists.map((navi) => (
                <Button
                    key={navi}
                    variant="outlined"
                    startIcon={<DirectionsCarIcon />}
                    onClick={() => handleNaviClick(navi as keyof typeof LOCATION_NAVI_URL)}
                >
                    {NAVI_LABELS[navi as keyof typeof NAVI_LABELS]}
                </Button>
            ))}
        </Stack>
    );
};

export default Navi;