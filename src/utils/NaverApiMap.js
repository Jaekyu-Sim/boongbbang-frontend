import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";
//import "./naverApiMap.scss";

export const NaverAPIMap = (props) => {
    console.log("🚀 ~ file: NaverApiMap.js:6 ~ NaverAPIMap ~ props", props)

    function getLocation() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                const now = new Date();
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        resolve({
                            err: 0,
                            time: now.toLocaleTimeString(),
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        });
                    },
                    (err) => {
                        resolve({
                            err: -1,
                            latitude: -1,
                            longitude: -1,
                        });
                    },
                    { enableHighAccuracy: true, maximumAge: 2000, timeout: 5000 }
                );
            } else {
                reject({ error: -2, latitude: -1, longitude: -1 });
            }
        });
    }

    const pos = getLocation();
    console.log("🚀 ~ file: NaverApiMap.js:9 ~ currentPosition ~ currentPosition", pos)
    
    return (
        <RenderAfterNavermapsLoaded clientId={"n4rdn701ap"}>
        <NaverMap
            id={"map"}
            mapDivId={"react-naver-map"} // default name
            style={{
                width: '100%',
                height: '100vh'
            }}
            defaultCenter={{ lat: 37.554722, lng: 126.970833 }}
            defaultZoom={10}
        />
        </RenderAfterNavermapsLoaded>
    );
};

export default NaverAPIMap;