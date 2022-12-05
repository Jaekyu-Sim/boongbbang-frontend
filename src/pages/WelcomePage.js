import React, {useState} from "react";
import TestWelcomeHeader from "../components/TestWelcomeHeader";
import { getAPI } from "../utils/Api";
import axios from "axios";
import boongbbang from "../styles/WelcomePage.css"

const WelcomePage = () => {

    const [val, setVal] = useState("test null");

    const buttonClicked = async () => {
        //getAPI("/test");
        console.log("process :", process.env.API_SERVER)
        const result = await getAPI("/api/apiTest/test");
        console.log("resutl : ", result);

        setVal(result);
    }
    return(
        <div>
            <TestWelcomeHeader></TestWelcomeHeader>
            <p> TestMainHeader Page 으로 들어왔습니다. </p>
            <button onClick={buttonClicked}>test call</button>
            {/* {JSON.stringify(val)} */}
            <div className="boongbbang"></div>
        </div>
    )
}
export default WelcomePage;