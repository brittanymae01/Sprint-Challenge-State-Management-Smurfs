import React, { Component } from "react";
import "./App.css";
import Smurf from './Smurf';
import Form from './Form';
import { connect } from 'react-redux'
import { getSmurf } from '../actions/smurfActions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Form />
        {this.props.smurfs.map(smurf => (
          <Smurf
            key={smurf.id}
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
          />
        ))}
        <button onClick={this.props.getSmurf}>Get Smurfs</button>
      </div>
    );
  }
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
  { getSmurf }
)(App);
