import React, { Component, fragment } from 'react'
import {  Grid, 
          Paper, 
          Typography,
          List,
          ListItem,
          ListItemText } from '@material-ui/core/'

const styles = {
	Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
}

class Exercices extends Component {
  render() {
    const { exercises } = this.props
    return (
      <Grid container>
      	<Grid item sm>
      		<Paper style={styles.Paper}>
            {exercises.map(([group, exercises])=>
              <fragment>
                <Typography
                  variant="headline"
                  style = {{textTransform: 'capitalize'}}
                >
                  { group }
                </Typography>
                <List component="ul">
                {exercises.map(({ title }) =>
                  <ListItem button>
                    <ListItemText primary={ title } />
                  </ListItem>
                  )}
                  <ListItem button component="a" href="#simple-list">
                    <ListItemText primary="Spam" />
                  </ListItem>
                </List>
              </fragment>
              )}
          </Paper>  
      	</Grid>
      	<Grid item sm>
      		<Paper style={styles.Paper}>
            Right Side
          </Paper>  
      	</Grid>
      </Grid>
    )
  }
}

export default Exercices