//root reducer 선언
import {combineReducers} from "redux";

//여기 아래로 reducer 추가
import currentPositionReducer from "../store/naverMap/reducer";

const rootReducer = combineReducers({
    currentPositionReducer,
})

export default rootReducer;