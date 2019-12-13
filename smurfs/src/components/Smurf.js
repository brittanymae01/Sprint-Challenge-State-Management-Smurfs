import React from 'react'

const Smurf = props => {
    return (
        <div className='card'>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </div>
    )
}

export default Smurf