import {getAuthUserData} from "./auth-reducer";

const INITIALIZING_COMPLETE = 'INITIALIZING-COMPLETE';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case INITIALIZING_COMPLETE:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedComplete = () => ({type: INITIALIZING_COMPLETE})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedComplete());
    })
}

export default appReducer;