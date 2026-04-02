const LOCATION = '코트야드 메리어트 서울 보타닉파크 호텔 포레스트 볼룸';
const LOCATION_CONTACT = {
    phoneNumber: '02-6946-7000',
    address: '서울 강서구 마곡중앙12로 10'
}


const LOCATION_INFO = {
    lat: 37.56692812742561, lng: 126.8294046623326
}

// constants/location.js 수정 제안
const LOCATION_NAVI_URL = {
    // 웹 링크를 사용하면 앱이 있으면 앱으로 연결할지 브라우저가 물어봅니다.
    kakao: `https://map.kakao.com/link/to/${LOCATION_CONTACT.address},${LOCATION_INFO.lat},${LOCATION_INFO.lng}`,
    naver: `https://map.naver.com/v5/directions/-/-/${encodeURIComponent(LOCATION_CONTACT.address)},${LOCATION_INFO.lat},${LOCATION_INFO.lng},,,ADDRESS_POI/car?c=15,0,0,0,dh`
};


const NAVI_LABELS: Record<string, string> = {
    kakao: '카카오 내비',
    naver: '네이버 내비',
}


export {
    LOCATION,
    LOCATION_CONTACT,
    LOCATION_INFO,
    NAVI_LABELS,
    LOCATION_NAVI_URL,

}