import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MainPage  from "./pages/MainPage";
import WelcomePage from "./pages/WelcomePage";
import { useDispatch } from "react-redux";
import { setCurrentPosition } from "./store/naverMap/action";

const App = () => {

    const [lat, setLat] = useState();
    const [lng, setLng] = useState();

    //current position from gps by using redux
    function getCurrentLoc() {
        const position = getLocation();
        position.then((value) => {
            console.log(value);
            setLat(value.latitude);
            setLng(value.longitude);
        })
    }
    function  getLocation() {
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
    getCurrentLoc();
    
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("lat, lng : ", lat, lng)
    }, [lat, lng])
    dispatch(setCurrentPosition({lat, lng}))


    return(
        <>
            {/* 
                컴포넌트 선언 및 라우팅 주소 입력
                ex)
                <Routes>
                    <Route path = "/path1 입력" element = {<페이지1 선언/>}></Route>
                    <Route path = "/path2 입력" element = {<페이지2 선언/>}></Route>
                </Routes>
            */}
            <Routes>
                <Route path="/" element = {<WelcomePage></WelcomePage>}></Route>
                <Route path="/MainPage" element = {<MainPage></MainPage>}></Route>
            </Routes>
        </>
    )
}

export default App;