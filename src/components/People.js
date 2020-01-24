import React from "react";
import { Card, Grid } from "semantic-ui-react";
import CharacterInfo from "./CharacterInfo.js";

export default function People({ data }) {
  return (
    <>
      <h1>People</h1>
      <Grid columns={1}>
        {data.map((people, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{people.name}</Card.Header>
                  <Card.Description>
                    <CharacterInfo characterInfo={people} />
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
