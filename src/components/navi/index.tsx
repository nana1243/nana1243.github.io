import {LOCATION_CONTACT, LOCATION_NAVI_URL, NAVI_ICONS, NAVI_LABELS, WEB_NAVI_URL} from "../../constants/location";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

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
    );
};

export default Navi;