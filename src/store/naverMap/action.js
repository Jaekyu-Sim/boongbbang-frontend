export const GET_CURR_POSITION = "GET_CURR_POSITION";
export const SET_CURR_POSITION = "SET_CURR_POSITION";

export function getCurrentPosition(){
    return {
        type: GET_CURR_POSITION
    }
}

export function setCurrentPosition(value){
    return{
        type: SET_CURR_POSITION, payload: value
    }
}