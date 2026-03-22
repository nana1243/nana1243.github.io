import {Map, MapMarker} from "react-kakao-maps-sdk";
import {LOCATION_INFO} from "../../constants/location";

const WeddingMap = () => {
    return (
        <Map
            center={{lat: LOCATION_INFO.lat, lng: LOCATION_INFO.lng}} // 지도의 중심좌표
            style={{width: "100%", height: "450px"}} // 지도 크기
            level={3} // 확대 레벨
        >
            <MapMarker position={{lat: LOCATION_INFO.lat, lng: LOCATION_INFO.lng}}>
            </MapMarker>
        </Map>
    );
};

export default WeddingMap;