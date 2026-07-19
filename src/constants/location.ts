import knavi from '@/assets/image/knavi-icon.png';
import nmap from '@/assets/image/nmap-icon.png';
import tmap from '@/assets/image/tmap-icon.png';


const LOCATION = '코트야드 메리어트 서울 보타닉파크 호텔 포레스트 볼룸 2F';
const LOCATION_CONTACT = {
    phoneNumber: '02-6946-7000',
    address: '서울 강서구 마곡중앙12로 10'
}


const LOCATION_INFO = {
    lat: 37.56692812742561, lng: 126.8294046623326
}

const LOCATION_NAVI_URL = {
    kakao: `kakaomap://route?ep=${LOCATION_INFO.lat},${LOCATION_INFO.lng}&by=CAR`, // 앱 스킴으로 변경 권장
    naver: `nmap://navigation?dlat=${LOCATION_INFO.lat}&dlng=${LOCATION_INFO.lng}&dname=${encodeURIComponent(LOCATION)}&appname=com.example.myapp`,
    tmap: `tmap://route?goalname=${encodeURIComponent(LOCATION)}&goalx=${LOCATION_INFO.lng}&goaly=${LOCATION_INFO.lat}`
};

const WEB_NAVI_URL = {
    kakao: `https://map.kakao.com/link/to/${encodeURIComponent(LOCATION)},${LOCATION_INFO.lat},${LOCATION_INFO.lng}`,
    naver: `https://map.naver.com/v5/search/${encodeURIComponent(LOCATION_CONTACT.address)}`,
    tmap: `https://map.naver.com/v5/search/${encodeURIComponent(LOCATION_CONTACT.address)}`
};

const NAVI_LABELS: Record<string, string> = {
    kakao: '카카오',
    naver: '네이버',
    tmap: '티맵',
}
const NAVI_ICONS: Record<string, string> = {
    kakao: knavi,
    naver: nmap,
    tmap: tmap,
}


export {
    LOCATION,
    LOCATION_CONTACT,
    LOCATION_INFO,
    NAVI_LABELS,
    LOCATION_NAVI_URL,
    WEB_NAVI_URL,
    NAVI_ICONS,
}