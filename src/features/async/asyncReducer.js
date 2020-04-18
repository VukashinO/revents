import { createReducer } from "../../app/common/util/reducerUtil";
import { ASYNC_ACTION_START } from "./asyncConstants";

const initialState = {
	loading: false,
};


const asyncActionStarted = (state) => {
    return {
        ...state,
        loading: true
    }
}

const asyncActionFinished = (state) => {
    return {
        ...state,
        loading: false
    }
}

const asyncActionError = (state) => {
    return {
        ...state,
        loading: false
    }
}


export default createReducer(initialState, {
    [ASYNC_ACTION_START] : asyncActionStarted,
    [asyncActionFinished] : asyncActionFinished,
    [asyncActionError] : asyncActionError
})