import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import StarshipInfo from './StarshipInfo';

function Starships({ data }) {
	return (
		<>
			<h1>Starships</h1>
			<Grid columns={1}>
				{data.map((starship, i) => {
					return (
						<Grid.Column key={i}>
							<Card>
								<Card.Content>
									<Card.Header>{starship.name}</Card.Header>
									<Card.Description>
										<StarshipInfo starshipInfo={starship} />
									</Card.Description>
								</Card.Content>
							</Card>
						</Grid.Column>
					);
				})}
			</Grid>
		</>
	);
}

export default Starships;
