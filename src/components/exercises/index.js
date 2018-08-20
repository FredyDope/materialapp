import React, { Component } from 'react'
import { Grid } from '@material-ui/core/'
import LeftSide from './LeftSide'
import RightSide from './RightSide'


const styles = {
	Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
}


class Exercices extends Component {
  render() {
    return (
      <Grid container>
      	<Grid item sm>
      		<LeftSide styles={styles} />
      	</Grid>
      	<Grid item sm>
      		<RightSide styles={styles} />
      	</Grid>
          
      </Grid>
    )
  }
}

export default Exercices;