import React, { Component } from "react";

class StarshipInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ expanded: !this.state.expanded });
  }

  close() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const info = this.props.starshipInfo;

    if (!this.state.expanded) {
      return <button onClick={this.open}>View info</button>;
    }

    return (
      <div>
        <ul>
          <li>
            <p>
              <strong>Crew:</strong> {info.crew}
            </p>
          </li>
          <li>
            <p>
              <strong>Passengers:</strong> {info.passengers}
            </p>
          </li>
        </ul>
        <button onClick={this.close}>Hide info</button>
      </div>
    );
  }
}

export default StarshipInfo;
