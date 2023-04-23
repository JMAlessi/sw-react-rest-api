import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import StarshipInfo from './StarshipInfo';

export default function Starships({ data }) {
	return (
		<>
			<h1>Starships</h1>
			<Grid columns={1}>
				{data.map((starships, i) => {
					return (
						<Grid.Column key={i}>
							<Card>
								<Card.Content>
									<Card.Header>{starships.name}</Card.Header>
									<Card.Description>
										<StarshipInfo starshipInfo={starships} />
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
