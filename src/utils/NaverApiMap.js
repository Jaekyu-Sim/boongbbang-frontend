import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";
//import "./naverApiMap.scss";

export const NaverAPIMap = (props) => {
    
    
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