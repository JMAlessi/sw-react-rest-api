import React, { Component } from 'react';

class StarshipInfo extends Component {
	state = {
		expanded: false,
	};

	toggleExpanded = () => {
		this.setState((prevState) => ({ expanded: !prevState.expanded }));
	};

	render() {
		const { starshipInfo } = this.props;
		const { expanded } = this.state;

		return (
			<div>
				{expanded ? (
					<>
						<ul>
							<li>
								<p>
									<strong>Crew:</strong> {starshipInfo.crew}
								</p>
							</li>
							<li>
								<p>
									<strong>Passengers:</strong> {starshipInfo.passengers}
								</p>
							</li>
						</ul>
						<button onClick={this.toggleExpanded}>Hide info</button>
					</>
				) : (
					<button onClick={this.toggleExpanded}>View info</button>
				)}
			</div>
		);
	}
}

export default StarshipInfo;
