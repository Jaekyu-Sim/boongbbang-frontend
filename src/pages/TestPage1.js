import React, {useState} from "react";
import Header from "../components/Header";
import { getAPI } from "../utils/Api";
import axios from "axios";

const TestPage1 = () => {

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
            <Header></Header>
            <p> Test Page 1 으로 들어왔습니다. </p>
            <button onClick={buttonClicked}>test call</button>
            {JSON.stringify(val)}
        </div>
    )
}
export default TestPage1;