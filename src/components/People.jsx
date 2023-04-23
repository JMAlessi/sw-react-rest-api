import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import CharacterInfo from './CharacterInfo';

export default function People({ data }) {
	return (
		<>
			<h1>People</h1>
			<Grid columns={1}>
				{data.map((person, i) => {
					return (
						<Grid.Column key={i}>
							<Card>
								<Card.Content>
									<Card.Header>{person.name}</Card.Header>
									<Card.Description>
										<CharacterInfo character={person} />
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
