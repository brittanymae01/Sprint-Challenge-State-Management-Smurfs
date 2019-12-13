import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addSmurf } from '../actions/smurfActions'

const Form = props => {
    const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

    const handleChange = e => {
        setSmurf({ ...smurf, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(smurf)

        props.addSmurf(smurf);

        setSmurf({
            name: "",
            age: "",
            height: ""
        });
    }


    return (
        <div>
            <div>
                <h3>Add a Smurf to your Village Here!</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="name"
                        onChange={handleChange}
                        value={smurf.name}
                        name="name"
                    />
                    <input
                        type="number"
                        placeholder="age"
                        onChange={handleChange}
                        value={smurf.age}
                        name="age"
                    />
                    <input
                        type="text"
                        placeholder="height"
                        onChange={handleChange}
                        value={smurf.height}
                        name="height"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        addingSmurf: state.addingSmurf,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { addSmurf }
)(Form);

