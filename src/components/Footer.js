import React, { Component } from 'react'
import { Paper, Tabs, Tab} from '@material-ui/core/'

class Footer extends Component {
  render() {
    return (
      <Paper>
        <Tabs
        value={1}
		indicatorColor="primary"
		textColor="primary"
		centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
    )
  }
}

export default Footer;