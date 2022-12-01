import { GET_CURR_POSITION, SET_CURR_POSITION } from "./action";

const initialState = {
    lat: "",
    lng: ""
};

function currentPositionReducer(state = initialState, action)
{
    switch(action.type){
        case GET_CURR_POSITION:
            return {state}
        case SET_CURR_POSITION:
            return {lat: action.payload.lat, lng: action.payload.lng}
        default:
            return {state}
    }
}

export default currentPositionReducer;