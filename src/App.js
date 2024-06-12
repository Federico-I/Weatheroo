import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { location: "dublin"};
    this.fetchForecast = this.fetchForecast.bind(this);
  };

  fetchForecast() {

    console.log("Loading data..");
    console.log(this);
  }

  render(){
    return( 
      <div className="app">
        <h1>Weatheroo</h1>
        <div>
          <input type="text" value={this.state.location} placeholder="Search city,town,etc..." onChange={(e) => this.setState({ location: e.target.value })}/>
        </div>
        <button onClick={this.fetchForecast}>Get Forecast...</button>
      </div>
  )}
};

export default App;