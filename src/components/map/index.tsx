import {Map, MapMarker} from "react-kakao-maps-sdk";
import {LOCATION_INFO} from "../../constants/location";

const WeddingMap = () => {
    return (
        <div style={{
            maxWidth: "900px",
            width: "95%",      // 모바일에서는 양옆 여백을 위해 95% 정도로 설정
            margin: "0 auto",   // 가로 중앙 정렬
            borderRadius: "15px", // 모서리 둥글게 (선택)
            overflow: "hidden"    // 지도가 둥근 모서리를 넘어가지 않게 함
        }}>
            <Map
                center={{lat: LOCATION_INFO.lat, lng: LOCATION_INFO.lng}} // 지도의 중심좌표
                style={{width: "100%", height: "450px"}} // 지도 크기
                level={3} // 확대 레벨
            >
                <MapMarker position={{lat: LOCATION_INFO.lat, lng: LOCATION_INFO.lng}}>
                </MapMarker>
            </Map>
        </div>
    );
};

export default WeddingMap;