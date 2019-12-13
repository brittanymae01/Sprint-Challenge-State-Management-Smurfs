import axios from 'axios';

export const SMURF_ERROR = 'SMURF_ERROR';
export const GETTING_SMURFS_START = 'GETTING_SMURFS_START';
export const GETTING_SMURFS_SUCCESS = 'GETTING_SMURFS_SUCCESS';
export const CREATING_SMURF_START = 'CREATING_SMURF_START';
export const CREATING_SMURF_SUCCESS = 'CREATING_SMURF_SUCCESS';

export const getSmurf = () => dispatch => {
    dispatch({ type: GETTING_SMURFS_START });
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            // console.log(res)
            dispatch({ type: GETTING_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: SMURF_ERROR, payload: err.response });
        })
}

export const addSmurf = newSmurf => dispatch => {
    dispatch({ type: GETTING_SMURFS_START })
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        // .then(response => console.log(response))
        .then(res => dispatch({ type: GETTING_SMURFS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: SMURF_ERROR, payload: err }))
}