import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
const HomePage = () => {

    const navigate = useNavigate();
    const navigateToTestpage1 = () => {
        navigate("/TestPage1")
    }
    const navigateToTestpage2 = () => {
        navigate("/TestPage2")
    }
    return(
        <div>
            <Header></Header>
            <button onClick={navigateToTestpage1}>
                To Page 1
            </button>
            <button onClick={navigateToTestpage2}>
                To Page 2
            </button>
        </div>
    )
}
export default HomePage;