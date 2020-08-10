import {statusAPI} from "../api/api";

const SET_STATUS = 'SET-STATUS';


let initialState = {
    status: ""
}

const aboutReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const setStatus = (status) => ({type: SET_STATUS, status})


export const getStatus = () => (dispatch) => {
    statusAPI.getStatus().then(response => {
        dispatch(setStatus(response.data));
    })
}

export const updateStatus = (status) => (dispatch) => {
    statusAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0)
            dispatch(setStatus(status));
    })
}


export default aboutReducer;