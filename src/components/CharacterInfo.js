import React, { Component } from "react";

class CharacterInfo extends Component {
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
    const info = this.props.characterInfo;

    if (!this.state.expanded) {
      return <button onClick={this.open}>View info</button>;
    }

    return (
      <div>
        <ul>
          <li>
            <p>
              <strong>Gender:</strong> {info.gender}
            </p>
          </li>
          <li>
            <p>
              <strong>Birth year:</strong> {info.birth_year}
            </p>
          </li>
        </ul>
        <button onClick={this.close}>Hide info</button>
      </div>
    );
  }
}

export default CharacterInfo;
