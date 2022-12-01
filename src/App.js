import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import React from "react";
import TestPage1 from "./pages/TestPage1";
import TestPage2 from "./pages/TestPage2";
import HomePage  from "./pages/HomePage";

const App = () => {
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
                <Route path="/" element = {<HomePage></HomePage>}></Route>
                <Route path="/TestPage1/" element = {<TestPage1></TestPage1>}></Route>
                <Route path="/TestPage2/" element = {<TestPage2></TestPage2>}></Route>
            </Routes>
        </>
    )
}

export default App;