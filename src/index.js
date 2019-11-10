import "./style/SeasonDisplay.css";
import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {latitude: null, errorMessage: ""};
  //
  // }
  state = {latitude: null, errorMessage: ""};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({latitude: position.coords.latitude});
      },
      err => {
        this.setState({errorMessage: err.message});
      }
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="container">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
