import { Map, MapMarker } from "react-kakao-maps-sdk";

const WeddingMap = () => {
    return (
        <Map
            center={{ lat: 37.5665, lng: 126.9780 }} // 지도의 중심좌표
            style={{ width: "100%", height: "450px" }} // 지도 크기
            level={3} // 확대 레벨
        >
            <MapMarker // 마커
                position={{ lat: 37.5665, lng: 126.9780 }}
                image={{
                    src: "/marker.svg", // 준비하신 SVG 경로
                    size: { width: 40, height: 40 },
                }}
            />
        </Map>
    );
};

export default WeddingMap;