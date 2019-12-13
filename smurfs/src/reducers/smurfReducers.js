// import {
//     SMURF_ERROR,
//     GETTING_SMURFS_START,
//     GETTING_SMURFS_SUCCESS,
//     CREATING_SMURF_START,
//     CREATING_SMURF_SUCCESS
// } from "";

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurfs: false,
    error: 'null'
}

const smurfsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default smurfsReducer;