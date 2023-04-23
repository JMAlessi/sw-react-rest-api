import React, { useState } from 'react';

function PlanetInfo(props) {
	const [expanded, setExpanded] = useState(false);
	const { climate, terrain } = props.planetInfo;

	const toggleExpanded = () => {
		setExpanded(!expanded);
	};

	return (
		<div>
			{expanded ? (
				<ul>
					<li>
						<p>
							<strong>Climate:</strong> {climate}
						</p>
					</li>
					<li>
						<p>
							<strong>Terrain:</strong> {terrain}
						</p>
					</li>
				</ul>
			) : (
				<button onClick={toggleExpanded}>View info</button>
			)}
			{expanded && <button onClick={toggleExpanded}>Hide info</button>}
		</div>
	);
}

export default PlanetInfo;
