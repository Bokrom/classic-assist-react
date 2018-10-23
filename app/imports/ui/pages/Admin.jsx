import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

class Admin extends React.Component {
  render() {
    return (
      <Grid verticalAlign='middle' textAlign='center' container>

        <Grid.Column width={4}>
          <Image size='small' circular src="/images/meteor-logo.png" />
        </Grid.Column>

        <Grid.Column width={8}>
          <h1>Ooooh, an admin. Aren't you special...</h1>
          <p>Neeeeeeeeeeeeerd!</p>
        </Grid.Column>

      </Grid>
    );
  }
}

export default Admin;
