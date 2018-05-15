import React, { Component } from 'react';

import Location from './components/Location';
import PeopleContainer from './containers/PeopleContainer'

class App extends Component {

  constructor(props) {
    super(props);

    setInterval(() => {
      this.updateTime();
    }, 1000)

    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  updateTime(){
    this.setState({
      time: new Date().toLocaleTimeString()
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">International Space Station tracker</h1>
            <p className="lead">
              A simple react application that tracks the ISS
              and the people aboard. I hope you enjoy it as much as I did
              creating it!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <div className="alert alert-success" role="alert">
            <h2>{this.state.time}</h2>
          </div>
            <Location />
          </div>
          <div className="col">
            <PeopleContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
