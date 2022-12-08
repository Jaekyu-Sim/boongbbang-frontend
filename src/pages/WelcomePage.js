import React, {useState} from "react";
import TestWelcomeHeader from "../components/TestWelcomeHeader";
import { getAPI } from "../utils/Api";
import axios from "axios";
import boongbbang from "../styles/WelcomePage.css"
import boongbbangImg from "../images/boongbbang.png"
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {

    const [val, setVal] = useState("test null");

    const navigate = useNavigate();
    const navigateToMainPage = () => {
        navigate("/MainPage")
    }

    const buttonClicked = async () => {
        //getAPI("/test");
        // console.log("process :", process.env.API_SERVER)
        // const result = await getAPI("/api/apiTest/test");
        // console.log("resutl : ", result);
        navigateToMainPage();
        // setVal(result);
    }


        /* Options */
    // ex.
    // const {Title, Text} = Typography;

    /* default 셋팅 */
    // ex.
    // const defaultColumnDef = {
    //    
    //}

    /* State 셋팅 */

    /* Custom Function */

    /* Transaction 셋팅 */

    /* Trigger 셋팅 */

    /* Effect 셋팅 */

    /* Rendering */
    return(
        <div style={{height:"100vh"}}>
            <TestWelcomeHeader></TestWelcomeHeader>
            <p style={{textAlign:"center"}}> TestMainHeader Page 으로 들어왔습니다. </p>
            
            {/* {JSON.stringify(val)} */}

            <div className="updown">
                <img className="boongbbang" src={boongbbangImg}></img>
            </div>

            <div style={{height:"60vh"}}>

            </div>
            <div style={{textAlign:"center"}} >
                <button onClick={navigateToMainPage}>붕어빵 확인하러 가기</button>
            </div>
        </div>
    )
}
export default WelcomePage;