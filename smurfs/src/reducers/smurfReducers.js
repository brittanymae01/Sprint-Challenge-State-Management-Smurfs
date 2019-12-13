import {
    SMURF_ERROR,
    GETTING_SMURFS_START,
    GETTING_SMURFS_SUCCESS,
} from "../actions/smurfActions"

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurfs: false,
    error: ''
}

const smurfsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_SMURFS_START:
            return {
                ...state,
                fetchingSmurfs: true
            }
        case GETTING_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                fetchingSmurfs: false,
                error: ''
            }
        case SMURF_ERROR:
            return {
                ...state,
                error: action.error
            }
        default: return state
    }
}

export default smurfsReducer;