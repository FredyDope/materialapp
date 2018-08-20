import React, { Component, fragment } from 'react'
import {  Grid, 
          Paper, 
          Typography,
          List,
          ListItem,
          ListItemText } from '@material-ui/core/'

const styles = {
	Paper: { padding: 20, marginTop: 10, marginBottom: 10, height: 500, overflowY: 'auto' }
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
           <Typography 
            variant="display1"
           >
           Welcome! 

           </Typography>
           <Typography
           variant="subheading"
           style= {{ marginTop: 20 }}
           >
           Please select an exercise from the list on the left.
             
           </Typography>
          </Paper>  
      	</Grid>
      </Grid>
    )
  }
}

export default Exercices