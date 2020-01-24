import React, { Component } from "react";

class PlanetInfo extends Component {
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
    const info = this.props.planetInfo;

    if (!this.state.expanded) {
      return <button onClick={this.open}>View info</button>;
    }

    return (
      <div>
        <ul>
          <li>
            <p>
              <strong>Climate:</strong> {info.climate}
            </p>
          </li>
          <li>
            <p>
              <strong>Terrain:</strong> {info.terrain}
            </p>
          </li>
        </ul>
        <button onClick={this.close}>Hide info</button>
      </div>
    );
  }
}

export default PlanetInfo;
