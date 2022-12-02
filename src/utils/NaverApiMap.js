import React, { useEffect, useState } from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";
//import "./naverApiMap.scss";

export const NaverAPIMap = (props) => {
    const pos = props.pos;
    const center = {pos};
    
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");

    useEffect(() => {
        console.log("center : ", center);
        setLat(center.pos[0]);
        setLng(center.pos[1]);
    }, [center])
    
    return (
        <RenderAfterNavermapsLoaded clientId={"n4rdn701ap"}>
        <NaverMap
            id={"map"}
            mapDivId={"react-naver-map"} // default name
            style={{
                width: '100%',
                height: '100vh'
            }}
            center={{lat, lng}}
            
            defaultCenter={{ lat: 37.554722, lng: 126.970833 }}
            defaultZoom={15}
        />
        </RenderAfterNavermapsLoaded>
    );
};

export default NaverAPIMap;