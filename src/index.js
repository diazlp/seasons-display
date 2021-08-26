import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

/* 
  Functional Components
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.error(err)
  );

  return <div>latitude: {}</div>;
}; 
*/

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     lat: null,
  //     errorMessage: "",
  //     currTime: new Date().toLocaleString(),
  //   };
  // }

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMessage: "Location unknown..." })
    );
  }

  componentDidUpdate() {}

  renderContent() {
    return (
      <div>
        {!this.state.lat && !this.state.errorMessage ? (
          <Spinner message="Please accept location request" />
        ) : (
          this.state.errorMessage || <SeasonDisplay lat={this.state.lat} />
        )}
      </div>
    );
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
