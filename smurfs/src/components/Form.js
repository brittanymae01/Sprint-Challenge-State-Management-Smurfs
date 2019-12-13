import React, { useState } from 'react'

const Form = props => {
    const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

    const handleChange = e => {
        setSmurf({ ...smurf, [e.target.name]: e.target.value });
    };


    return (
        <div>
            <div>
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

export default Form