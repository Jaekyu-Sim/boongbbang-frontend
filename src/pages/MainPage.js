/* Define Library */
import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

/* Custom Library */
import TestMainHeader from "../components/TestMainHeader";
import NaverApiMap from "../utils/NaverAPIMap";

const MainPage = () => {

    const {lat, lng} = useSelector(
        
        state => ({
            lat: state.currentPositionReducer.lat,
            lng: state.currentPositionReducer.lng
        }),
        shallowEqual
    )

    console.log("🚀 ~ file: HomePage.js:13 ~ HomePage ~ lat, lng", lat, lng)

    
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
    
    
    const navigate = useNavigate();
    const navigateToTestpage1 = () => {
        navigate("/TestPage1")
    }
    const navigateToTestpage2 = () => {
        navigate("/TestPage2")
    }
    

    /* Rendering */
    return(
        <div>
            <TestMainHeader></TestMainHeader>
            <button onClick={navigateToTestpage1}>
                To Page 1
            </button>
            <button onClick={navigateToTestpage2}>
                To Page 2
            </button>
            <NaverApiMap pos = {[lat, lng]}></NaverApiMap>
        </div>
    )
}
export default MainPage;